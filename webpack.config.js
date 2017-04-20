const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/,loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: "file-loader?name=/client/assets/[name].[ext]"},


    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
