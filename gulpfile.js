/*jshint node:true */
var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');

gulp.task('sass', () =>
         rubySass('sass/*.scss')
         .on('error', rubySass.logError)
         .pipe(gulp.dest('result'))
         );

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['sass'])
});