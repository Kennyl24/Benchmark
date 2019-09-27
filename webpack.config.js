var webpack = require('webpack');
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const MinifyPlugin = require('babel-minify-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: 'none',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  // optimization: {
  //   minimize: true //Update this to true or false
  // },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../'),
          '/node_modules/mortgage-js/index.js',
          '/node_modules/ms/index.js',
        ],
        exclude: /node_modules/,      
        query: {
          presets: [ 'react', 'es2015', 'stage-0']
        },
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  }
};