// Karma configuration
// Generated on Wed Apr 29 2015 16:08:32 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/lib/angular/angular.js',
      'src/lib/angular-mocks/angular-mocks.js',
      'src/lib/angular-resource/angular-resource.js',
      'src/lib/angular-ui-router/release/angular-ui-router.js',
      'src/lib/angular-bootstrap/ui-bootstrap.js',

      //'src/lib/jasmine/lib/jasmine-core/*.js',
      //'src/test/jasmine-2.0.0/console.js',
      //'src/test/jasmine-2.0.0/jasmine-html.js',
      //'src/test/jasmine-2.0.0/boot.js',

      'src/app/**/*.js',
      'src/app/**/*.js',
      //'src/app/home/home.controller.js',
      'src/test/specs/homeSpec.js'
      //'src/app/**/*.js',
      //'src/test/specs/*.js'
      //'**/*.tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],
    /*plugins: [
      'karma-jasmine'*//*,
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'*//*
    ],*/

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    
    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome','Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
