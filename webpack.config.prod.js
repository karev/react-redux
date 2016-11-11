import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import postCssImport from 'postcss-import';
import postCssUrl from 'postcss-url';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: false,
  devtool: 'source-map',
  noInfo: false,
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/build',
    publicPath: './',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve(__dirname, 'src/components/common')]
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader')
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000&name=fonts/[name].[ext]'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=svg/[name].[ext]'
      },
      {test: /\.json$/, loader: 'json-loader'},
      {
        test: /\.(png|jpg)$/,
        loader: 'file?limit=10000&name=img/[name].[ext]'
      }
    ]
  },
  postcss: function (bundler) {
    return [
      postCssImport({
        addDependencyTo: bundler
      }),
      require("postcss-cssnext")({
        browsers: ['last 2 versions', 'IE > 10'],
        features: {
          customProperties: true
        }
      }),
      postCssUrl()
    ];
  }
};
