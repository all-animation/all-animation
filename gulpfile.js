var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	minifycss = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	src = 'assets';

gulp.task('css', function() {
	gulp.src('./'+src+'/stylus/all-animation.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'+src+'/css'))
		.pipe(notify('Stylus compilado e mimificado!'));
});

gulp.task('dist-css', function() {
	gulp.src('./'+src+'/css/all-animation.css')
		.pipe(concat('./all-animation.min.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('./'+src+'/css'))
		.pipe(notify('All animaiton is begin created!'));
});

gulp.task('default', function() {
	gulp.watch('./'+src+'/stylus/**/**/*.*', ['css', 'dist-css']);
});