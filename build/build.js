const config = require('./config');
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const base64 = require('gulp-base64');
const rename = require('gulp-rename');

console.log('env: ', process.env.NODE_ENV);

gulp.task('compile-less', () => {
    return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
        .pipe(less())
        .pipe(base64({
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
        }))
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest(config.distPath));
});

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js', '../src/**/*.wxs'])
        .pipe(gulp.dest(config.distPath));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest(config.distPath));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest(config.distPath));
});

if(!config.isProduction) {
    gulp.task('serve', () => {
        console.log('watch is running!');

        config.ext.forEach(item => {
            gulp.watch(`../src/**/*.${item}`, [`compile-${item}`]);
        });
    });
}

gulp.task('build', ['compile-less', 'compile-js', 'compile-json', 'compile-wxml']);

gulp.run('build');


