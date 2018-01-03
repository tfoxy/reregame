const WebpackCommonConfig = require('./webpack.config.common');

const noop = () => {};

class WebpackTestConfig extends WebpackCommonConfig {
  get cssLoader() {
    return 'null-loader';
  }

  get fileLoader() {
    return 'null-loader';
  }

  get nodeEnv() {
    return 'testing';
  }

  get htmlWebpackPlugin() {
    return noop;
  }
}

module.exports = new WebpackTestConfig().make();
