var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var url = require('url');

var webpackCommonConfig = require('./webpack/webpack.conf.common');


var devServer = express();
var appPath = '/';

// Setup webpack config for dev server.
var devServerWebpackConfig = Object.assign({}, webpackCommonConfig, {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=' + appPath + '__webpack_hmr',
    './src/index'
  ],
  plugins: webpackCommonConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': Object.assign({}, webpackCommonConfig.envVars, {
        'NODE_ENV': JSON.stringify('development'),
      }),
    }),
  ]),
});
  
// Create webpack compiler for webserver to use.
var compiler = webpack(devServerWebpackConfig);

// Serve index file.
devServer.get(appPath, function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve data.
devServer.get(appPath + "data/pastaOrComposer.json", function(req, res) {
  res.sendFile(path.join(__dirname, 'data/pastaOrComposer.json'));
});

// Serve other requests from webpack dev middleware.
devServer.use(appPath, webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: devServerWebpackConfig.output.publicPath,
}));

// Use webpack hot reloading.
devServer.use(appPath, webpackHotMiddleware(compiler));

devServer.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000' + appPath);
});
