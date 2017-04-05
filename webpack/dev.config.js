const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const modRewrite  = require('connect-modrewrite');

//process.traceDeprecation = true;

const config = {
  entry: ['whatwg-fetch', './debug.js'],
  output: {
    //path: __dirname,
    filename: './script.js'
  },
  resolve: {
    alias: {
      'react': 'preact',
      'react-dom': 'preact-compat'
    }
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
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
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
      //devtool: 'inline-source-map'
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: [''],
        middleware: [
          modRewrite([
            '!\\.\\w+$ /index.html [L]'
          ])
        ]
      }
    })
  ]
};

module.exports = config;