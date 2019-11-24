const THEME_PATH = 'themes/DefaultTheme';

// initialize modules
const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browser = require('browser-sync');
const php = require('gulp-connect-php');
var replace = require('gulp-replace');

// file paths
const files = {
    // source path
    scssPath: THEME_PATH + '/assets/scss/**/*.scss',
    jsPath: THEME_PATH + '/assets/js/**/*.js',
    viewPath: THEME_PATH + '/views/**/*.php',

    // dist (build) path
    cssBuildPath: THEME_PATH + '/dist/css/',
    jsBuildPath: THEME_PATH + '/dist/js/',
    fontsBuildPath: THEME_PATH + '/dist/fonts/',
    imgBuildPath: THEME_PATH + '/dist/img/'
}

// compiles *.scss to .css file
function styles() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(files.cssBuildPath))
        .pipe(browser.stream());
}

// combines and minify js files to main.js
function scripts() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest(files.jsBuildPath))
        .pipe(browser.stream());
}

// run browser
function serve() {
    php.server({
        base: 'web/',
        port: 8989,
        keepalive: true
    });

    browser.init({
        proxy: 'localhost:8989',
        https: false,
        injectChanges: true,
    });

    watch([ files.scssPath, files.jsPath ], series(styles, scripts));
    watch(files.scssPath).on('change', browser.reload);
    watch(files.jsPath).on('change', browser.reload);
    watch(files.viewPath).on('change', browser.reload);
}

exports.default = series(parallel(styles, scripts), serve);
