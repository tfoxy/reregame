const WebpackCommonConfig = require('./webpack.config.common');

class WebpackDevConfig extends WebpackCommonConfig {
  get nodeEnv() {
    return 'development';
  }
}

module.exports = new WebpackDevConfig().make();
