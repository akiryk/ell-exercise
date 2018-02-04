const gulp        = require('gulp');
const riot        = require('gulp-riot');
const browserSync = require('browser-sync').create();
const concat      = require('gulp-concat');
const sass        = require('gulp-sass');
const babel       = require('gulp-babel');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');
const reload      = browserSync.reload;

const src = {
    scss: 'src/scss/**/*.scss',
    css:  'src/css',
    tags: 'src/tags/*.tag',
    html: 'src/index.html'
};

gulp.task('copy', () => (
  gulp.src(src.html))
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.stream())
)

gulp.task('uglify', () => (
  gulp.src('src/js/*.js'))
    .pipe(babel({presets: ["env"]}))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('docs/js'))
)

gulp.task('sass',() => (
  gulp.src(src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.stream())
  )
);

gulp.task('server', () => {
  browserSync.init({
      server: "./docs"
  });
});

gulp.task('default', ['sass'], function() {

    browserSync.init({
        server: "./docs"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html, ['copy']);
    gulp.watch('src/js/*.js', ['uglify']);
    gulp.watch([src.html, 'docs/js/*.js']).on('change', reload);
});

