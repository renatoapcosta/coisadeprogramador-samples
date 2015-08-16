var gulp = require('gulp'),
    jsdoc = require("gulp-jsdoc");
 
gulp.task('jsdoc-now', function(){
      gulp
      .src("./source/*.js")
      .pipe(jsdoc('./output-bygulp'));
});