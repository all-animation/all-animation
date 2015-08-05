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

gulp.task('default', function() {
	gulp.watch('./'+src+'/stylus/**/**/*.*', ['css']);
});