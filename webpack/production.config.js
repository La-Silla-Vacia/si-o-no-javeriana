const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const config = {
  entry: ['whatwg-fetch', './debug.js'],
  output: {
    // path: path.resolve(__dirname, '../dist'),
    filename: './script-min.js'
  },
  resolve: {
    alias: {
      'react': 'preact',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', 'react']],
          plugins: [["transform-react-jsx", { "pragma": "h" }]]
        }
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.css$/,
        // loaders: [ 'style-loader', 'css-loader', 'postcss-loader'
        loader: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader']
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loaders: ['underscore-template-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        loaders: ['dsv-loader']
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    })
  ]
};

module.exports = config;