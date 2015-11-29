var webpack = require('webpack');

var webpackCommonConfig = require('./webpack.conf.common');

module.exports = Object.assign({}, webpackCommonConfig, {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  plugins: webpackCommonConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': webpackCommonConfig.envVars,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]),
});
