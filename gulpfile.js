'use strict';

var gulp = require('gulp'), del = require('del');

gulp.task('build-fonts', () => {
    return gulp.src(['libs/assets/sof-fonts/**/*'])
        .pipe(gulp.dest('dist/resources/sof-fonts'));
});

gulp.task('build-images', () => {
    return gulp.src(['libs/assets/sof-images/**/*'])
        .pipe(gulp.dest('dist/resources/sof-images'));
});

gulp.task('build-styles', () => {
    return gulp.src(['libs/assets/sof-styles/**/*'])
        .pipe(gulp.dest('dist/resources/sof-styles'));
});

gulp.task('clean-build', () => {
	del(['dist/resources']);
});

gulp.task('build-assets', gulp.series(['clean-build', 'build-fonts', 'build-images', 'build-styles']), (done) => {
    console.log("Gulp is running...");
    done();
});

gulp.task('copy-fonts', () => {
    return gulp.src(['node_modules/ng-softilys/resources/sof-fonts/**/*'])
        .pipe(gulp.dest('apps/ng-softilys/src/assets/sof-fonts'));
});

gulp.task('copy-images', () => {
    return gulp.src(['node_modules/ng-softilys/resources/sof-images/**/*'])
        .pipe(gulp.dest('apps/ng-softilys/src/assets/sof-images'));
});

gulp.task('clean-copy', () => {
	del(['apps/ng-softilys/src/assets/sof-images', 'apps/ng-softilys/src/assets/sof-fonts']);
});

gulp.task('copy-assets', gulp.series(['clean-copy', 'copy-fonts', 'copy-images']), (done) => {
    console.log("Gulp is running...");
    done();
});

        