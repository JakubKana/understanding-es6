import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import browserify from 'browserify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';


const filenames = {
    indexBuild: 'index.build.js'
};

const dirs = {
    build: 'build'
};



gulp.task("default", () => {
  return gulp.src("src/js/*.js")
    .pipe(sourcemaps.init())
    .on('error', swallowError)
    .pipe(babel())
    .pipe(concat("index.build.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(dirs.build));
});

gulp.task("copyStaticFiles", () => {
  return gulp.src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/**/*",
        "src/css/site.css"
      ]).pipe(gulp.dest("./build"));
});

gulp.task("build-first", () => {
  return browserify({
          entries: ["./src/js/main.js"]
      })
      .transform(babelify.configure({
        presets: ["env"],
        plugins: [ "transform-async-to-generator"]
      }))
      .bundle()
      .pipe(source("bundle.index.js"))
      .on('error', swallowError)
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .on('error', swallowError)
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest("./build"));
});

gulp.task("copy-js", () => {
    return browserify({
        entries: ["./src/js/main.js"]
    })
    .bundle()
    .pipe(source("bundle.index.js"))
    .on('error', swallowError)
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .on('error', swallowError)
    .pipe(sourcemaps.write('./maps')).pipe(gulp.dest("./build"))
});

gulp.task("copy-es6", () => {
    return browserify({
        entries: ["./src/js/ecmaScript6.js"]
    })
     .transform(babelify.configure({
         presets: ["env"],
         plugins: ["transform-async-to-generator"]
       }))
    .bundle()
    .pipe(source("bundleES6.index.js"))
    .on('error', swallowError)
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .on('error', swallowError)
    .pipe(sourcemaps.write('./maps')).pipe(gulp.dest("./build"))
});

gulp.task("copy-worker", () => {
    return gulp.src([
          "./src/js/workers/worker.js",
         "./src/js/workers/sharedWorker.js"
        ]).pipe(gulp.dest("./build"));
  });

gulp.task("start", () => {
    gulp.start("copyStaticFiles", "default");
});

gulp.task('watch-all', () => {
    gulp.watch(['src/**/*.js'], ["build-first"]);
});

gulp.task("watch-and-copy", () => {
    gulp.watch(['src/**/*.js'], ["copy-js"])
});

gulp.task("watch-es6", () => {
    gulp.watch(['src/**/*.js'], ["copy-es6","copy-worker"])
});

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}

