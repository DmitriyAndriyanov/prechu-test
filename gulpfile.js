// Variables
var gulp = require('gulp'),
    sass = require('gulp-sass');

//Tasks
//gulp sass
gulp.task('sass', function () { 
	gulp.src('./assets/css/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

// gulp watch
gulp.task('watch', function () {
	gulp.watch('./assets/css/**/*.scss', ['sass']); 
});