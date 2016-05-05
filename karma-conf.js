// Karma configuration

'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-babel-preprocessor',
      'karma-electron-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      { pattern: 'test/karma-shim.js', watched: true, included: true, served: true },
      'browser/directives/*.html',
      'browser/pages/**/*.html',
      'test/browser/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // proxies: {
    //   'directives/': '/base/browser/directives/'
    //   '/services5/': '/base/browser/services/',
    //   '/services6/': 'http://localhost:9876/base/browser/services/'
    // },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/browser/**/*.js': ['babel'],
      'browser/directives/*.html': ['ng-html2js'],
      'browser/pages/**/*.html': ['ng-html2js']
    },

    babelPreprocessor: {
      options: {
        presets: ['node5']
        // plugins: [ 'transform-es2015-modules-commonjs' ]
      }
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'browser/',
      // stripSuffix: '.ext',
      // prepend this to the
      // prependPrefix: 'servedxx/',

      // or define a custom transform function
      // - cacheId returned is used to load template
      //   module(cacheId) will return template at filepath
      // cacheIdFromPath: function(filepath) {
        // example strips 'public/' from anywhere in the path
        // module(app/templates/template.html) => app/public/templates/template.html
        // var cacheId = filepath.strip('public/', '');
        // return cacheId;
      // },

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      // moduleName: 'templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: '',
      outputFile: 'browser-tests.xml',
      useBrowserName: false,
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
    browsers: ['Electron'],

    electronOpts: {
      width: 1000,
      height: 650
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
