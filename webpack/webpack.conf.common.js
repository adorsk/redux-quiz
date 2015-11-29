var path = require('path');
var webpack = require('webpack');


module.exports = {
  envVars:  {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        loaders: ['babel'],
        include: path.join(__dirname, '..', 'src')
      },
    ]
  },
  output: {
    path: path.join(__dirname, '../', 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
