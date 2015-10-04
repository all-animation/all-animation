var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	notify = require('gulp-notify'),
	src = 'assets';

gulp.task('css', function() {
	gulp.src('./'+src+'/stylus/all-animation.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'+src+'/css'))
		.pipe(notify('Stylus compilado e mimificado!'));
});

// Settings tasks
gulp.task('watch', function() {
  gulp.watch('./'+src+'/stylus/**/**/*.*', ['css']);
});

gulp.task('default', ['css', 'watch']);
