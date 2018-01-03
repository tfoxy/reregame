const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class WebpackCommonConfig {
  get nodeEnv() {
    throw new Error('Must be implemented');
  }

  get minimize() {
    return false;
  }

  get tsxLoader() {
    return 'ts-loader';
  }

  get cssLoader() {
    return [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      options: { minimize: this.minimize },
    }];
  }

  get fileLoader() {
    return 'file-loader';
  }

  get htmlWebpackPlugin() {
    return new HtmlWebpackPlugin({
      title: 'reregame',
    });
  }

  make() {
    return {
      entry: './src/index.tsx',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
      },
      module: {
        rules: [{
          test: /.tsx?$/,
          use: this.tsxLoader,
        }, {
          test: /.css$/,
          use: this.cssLoader,
        }, {
          test: /.mp3$/,
          use: this.fileLoader,
        }],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(this.nodeEnv),
        }),
        this.htmlWebpackPlugin,
      ],
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    };
  }
}

module.exports = WebpackCommonConfig;
