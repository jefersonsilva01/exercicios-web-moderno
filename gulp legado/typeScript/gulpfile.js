const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
// const concat = require('gulp-concat')

gulp.task('default', () => {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(babel({
      minified: true,
      comments: false,
      presets: ['env']
    }))
    .pipe(uglify())
    // .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})