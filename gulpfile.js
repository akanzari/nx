'use strict';

var gulp = require('gulp'), del = require('del');

gulp.task('copy-fonts', function() {
    return gulp.src(['libs/assets/sof-fonts/**/*'])
        .pipe(gulp.dest('dist/resources/sof-fonts'));
});

gulp.task('copy-images', function() {
    return gulp.src(['libs/assets/sof-images/**/*'])
        .pipe(gulp.dest('dist/resources/sof-images'));
});

gulp.task('copy-styles', function() {
    return gulp.src(['libs/assets/sof-styles/**/*'])
        .pipe(gulp.dest('dist/resources/sof-styles'));
});

gulp.task('clean', function() {
	del(['dist/resources']);
});

//Building project with run sequence
gulp.task('build-assets', ['clean','copy-fonts','copy-images','copy-styles']);

        