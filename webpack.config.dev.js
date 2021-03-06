import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import postCssImport from 'postcss-import';
import postCssUrl from 'postcss-url';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {},
    extensions: ['', '.js', '.jsx', '.css'],
    root: [
      path.resolve(__dirname, 'src/components/common/')
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {
        test: /(\.css)$/,
        include: [
          path.join(__dirname),
          path.join(__dirname, 'src'),
          path.join(__dirname, 'assets')
        ],
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=10000&name=img/[name].[ext]'}
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
