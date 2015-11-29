var webpack = require('webpack');

var webpackCommonConfig = require('./webpack.conf.common');


module.exports = Object.assign({}, webpackCommonConfig, {
  devtool: 'eval-source-map',
  entry: [
    '../src/index'
  ],
  plugins: webpackCommonConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]),
});
