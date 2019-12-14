// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-teamcity-reporter')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadlessDangerous', 'ChromeHeadless', 'Chrome'],
        customLaunchers: {
            ChromeHeadlessDangerous: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        failOnEmptyTestSuite: false,
        singleRun: true
    });
};
