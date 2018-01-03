const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WebpackCommonConfig = require('./webpack.config.common');

class WebpackProdConfig extends WebpackCommonConfig {
  get nodeEnv() {
    return 'production';
  }

  get minimize() {
    return true;
  }

  make() {
    const config = super.make();
    return merge(config, {
      output: {
        filename: 'index.[chunkhash].js',
      },
      plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin(),
      ],
    });
  }
}

module.exports = new WebpackProdConfig().make();
