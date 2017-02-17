const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js"
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [HTMLWebpackPluginConfig]
};
