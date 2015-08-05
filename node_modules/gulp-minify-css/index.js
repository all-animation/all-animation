'use strict';

var path = require('path');

var applySourceMap = require('vinyl-sourcemaps-apply');
var cache = require('memory-cache');
var CleanCSS = require('clean-css');
var PluginError = require('gulp-util').PluginError;
var through2 = require('through2');
var VinylBufferStream = require('vinyl-bufferstream');

function objectIsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function sourceMap(file, map) {
  map.file = path.relative(file.base, file.path);
  map.sources = map.sources.map(function(src) {
    if (src === '__stdin__.css') {
      return path.relative(file.base, file.path);
    } else if (path.resolve(src) === path.normalize(src)) {
      // Path is absolute so imported file had no existing source map.
      // Trun absolute path in to path relative to file.base.
      return path.relative(file.base, src);
    } else {
      return src;
    }
  });

  applySourceMap(file, map);
}

module.exports = function gulpMinifyCSS(options) {
  options = options || {};

  return through2.obj(function modifyContents(file, enc, cb) {
    var run = new VinylBufferStream(function(buf, done) {
      var rawContents = String(buf);
      var cached;
      if (options.cache &&
        (cached = cache.get(file.path)) &&
        cached.raw === rawContents &&
        objectIsEqual(cached.options, options)) {

        // cache hit
        done(null, new Buffer(cached.minified.styles));
        return;
      }

      // Image URLs are rebased with the assumption that they are relative to the
      // CSS file they appear in (unless "relativeTo" option is explicitly set by
      // caller)
      var relativeToTmp = options.relativeTo;
      options.relativeTo = options.relativeTo || path.resolve(path.dirname(file.path));

      // Enable sourcemap support if initialized file comes in.
      if (file.sourceMap) {
        options.sourceMap = JSON.stringify(file.sourceMap);
      }

      new CleanCSS(options).minify(rawContents, function(errors, css) {
        if (options.cache) {
          cache.put(file.path, {
            raw: rawContents,
            minified: css,
            options: options
          });
        }

        if (errors) {
          done(new PluginError('minify-css', errors.join(', '), {fileName: file.path}));
          return;
        }

        // Restore original "relativeTo" value
        options.relativeTo = relativeToTmp;

        if (css.sourceMap && file.sourceMap) {
          // clean-css gives bad 'sources' and 'file' properties because we
          // pass in raw css instead of a file.  So we fix those here.
          sourceMap(file, JSON.parse(css.sourceMap));
        }

        done(null, new Buffer(css.styles));
      });
    });

    var self = this;

    run(file, function(err, contents) {
      if (err) {
        self.emit('error', err);
      } else {
        file.contents = contents;
        self.push(file);
      }
      cb();
    });
  });
};
