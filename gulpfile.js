"use strict";

const { src, dest, parallel } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const panini = require("panini");
const imagemin = require("gulp-imagemin");
const del = require("del");
const browserSync = require("browser-sync").create();

// paths
const srcPath = "src/";
const distPath = "dist/";

const path = {
  build: {
    html: distPath,
    css: distPath + "css/",
    js: distPath + "js/",
    images: distPath + "images/",
    fonts: distPath + "fonts/",
  },
  src: {
    html: srcPath + "*.html",
    scss: srcPath + "scss/*.scss",
    css: srcPath + "css/",
    js: srcPath + "js/*.js",
    images: srcPath + "images/**/*.{jpeg, jpg, png, svg}",
    fonts: srcPath + "fonts/**/*.{eot, woff,woff2,ttf,svg}",
  },
  watch: {
    html: srcPath + "**/*.html",
    css: srcPath + "scss/**/*.scss",
    js: srcPath + "js/**/*.js",
    images: srcPath + "images/**/*.{jpeg, jpg, png, svg}",
    fonts: srcPath + "fonts/**/*.{eot, woff,woff2,ttf,svg}",
  },
  clean: "./" + distPath,
};

function serve() {
  browserSync.init({
    server: {
      baseDir: "./" + srcPath,
    },
  });
}
function html() {
  return src(path.src.html, { base: srcPath })
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}
function css() {
  return src(path.src.scss, { base: srcPath + "scss/" })
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: true,
        overrideBrowserslist: ["last 3 versions"],
        grid: true,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(dest(path.src.css))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(
      cssnano({
        zindex: false,
        discardComments: {
          removeAll: true,
        },
      })
    )
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(dest(path.build.css));
}
function js() {
  return src(path.src.js, { base: srcPath + "js/" })
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
}
function images() {
  return src(path.src.images, { base: srcPath + "images/" })
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({ stream: true }));
}
function clean() {
  return del(path.clean);
}
function fonts() {
  return src(path.src.fonts, { base: srcPath + "fonts/" }).pipe(
    browserSync.reload({ stream: true })
  );
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.clean = clean;
exports.fonts = fonts;
exports.build = build;
exports.watch = watch;
exports.default = watch;
