const gulp = require('gulp')
const babel = require('gulp-babel')
gulp.task('default', function(done){
gulp.src("src/app.js")
.pipe(babel())
.pipe(gulp.dest("dist"))
   console.log("fantastic")
done()
})