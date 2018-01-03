// eslint-disable-next-line import/no-extraneous-dependencies
const puppeteer = require('puppeteer');
const webpackConfig = require('./webpack.config.test');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  const tests = 'src/**/*.spec.ts';

  config.set({
    frameworks: ['mocha'],

    files: [{
      pattern: tests,
    }],

    preprocessors: {
      [tests]: ['webpack'],
    },

    singleRun: false,

    reporters: ['mocha'],

    mime: {
      'text/x-typescript': ['ts', 'tsx'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
    },

    mochaReporter: {
      showDiff: true,
    },

    browsers: ['ChromeHeadless'],
  });
};
