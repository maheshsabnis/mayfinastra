// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  // Load all Karma Plugins
  config.set({
    basePath: '',
    // Use the Testing Frwk Object Model
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'), // Karma-Jasmine integration to load the Test Files into the Memory and test them
      require('karma-chrome-launcher'), // Use the Chrome Launcher service to launch Chrome Process to load the JS dependencies
      require('karma-jasmine-html-reporter'), // The HTMl Reporter for Coverage of the Code
      require('karma-coverage'), // Execute the Code Coverage so that the Code-Quality can be tested
      require('@angular-devkit/build-angular/plugins/karma') // Karma + Angular Integration
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ng-fin-app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
