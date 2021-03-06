'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plugins = require('gulp-load-plugins')();
var karma = require('gulp-karma');
//var karma = require('karma').server;
var jasmine = require('gulp-jasmine');
var cover = require('gulp-coverage');


var paths = {
    appScripts: 'src/app/**/*.js'
};
var concatPaths = {
    appScripts: 'src/app/dist/js/**/*.js'
};

var testFiles = [
    'test/specs/*.js'
];

gulp.task('scripts', function () {
    return gulp.src([paths.appScripts])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(require('jshint-stylish')))
        .pipe(plugins.size());
});

gulp.task('test', function () {
    // Be sure to return the stream
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});



gulp.task('coverage', function () {
    return gulp.src('src/test/specs/homeSpec.js')
        .pipe(cover.instrument({
            pattern: ['**/test*'],
            debugDirectory: 'debug'
        }))
        .pipe(jasmine())
        .pipe(cover.gather())
        .pipe(cover.format())
        .pipe(gulp.dest('reports'));
});
//gulp.task('test', function (done) {
//    karma.start({
//        configFile: 'karma.conf.js',
//        singleRun: true
//    }, done);
//});

gulp.task('jasmine', function () {
    return gulp.src('src/test/specs/homeSpec.js')
        .pipe(jasmine());
});

gulp.task('build', function () {
    return gulp.src(['src/app/**/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/app/dist/js'));
});

gulp.task('injectjs', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src([paths.appScripts]);

    return target.pipe(plugins.inject(sources, {
        relative: true
    }))
        .pipe(gulp.dest('./src'));

});

gulp.task('injectconcatjs', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src([concatPaths.appScripts]);
    return target.pipe(plugins.inject(sources, {
        relative: true
    }))
    .pipe(gulp.dest('./src'));

});

gulp.task('watch', ['serve'], function () {
    var server = plugins.livereload();
    gulp.watch([
        'src/**/*.html',
        'src/app/**/*.js',
        'src/app/**/*.html',
        'src/styles/*.css'
    ]).on('change', function (file) {
        console.log('File changed: ' + file.path);
        server.changed(file.path);
    });

    gulp.watch(paths.appScripts, ['scripts']);
});


gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:8080');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({
            port: 35729
        }))
        .use(connect.static('src'))
        .use(connect.directory('src'));

    require('http').createServer(app)
        .listen(8080)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:8080');
        });
});