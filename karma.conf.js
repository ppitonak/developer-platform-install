// Karma configuration

'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-babel-preprocessor',
      'karma-electron-launcher',
      'karma-jspm',
      'karma-jasmine'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jspm'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/karma-shim.js', watched: true, included: true, served: true}
    ],

    // list of files to exclude
    exclude: [],

    jspm: {
      // can't use browser/config.js because of a bug in karma-jspm
      // the file is copied in postinstall script
      config: 'test/jspm-config.js',
      packages: 'browser/jspm_packages',
      loadFiles: ['test/browser/**/*.js'],
      serveFiles: [
        'browser/*.js',
        'browser/directives/**/*.js',
        'browser/model/**/*.js',
        'browser/pages/**/*.js',
        'browser/services/**/*.js'
      ],
      paths: {
        'github:*': 'browser/jspm_packages/github/*',
        'npm:*': 'browser/jspm_packages/npm/*'
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'browser/*.js': ['babel'],
      'browser/directives/**/*.js': ['babel'],
      'browser/model/**/*.js': ['babel'],
      'browser/pages/**/*.js': ['babel'],
      'browser/services/**/*.js': ['babel'],
      'test/browser/**/*.js': ['babel']
    },

    babelPreprocessor: {
      options: {
        modules: 'system'
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

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
    browsers: ['Electron'],

    electronOpts: {
      width: 1000,
      height: 650
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
