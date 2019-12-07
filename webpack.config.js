const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'bundle.js',
    publicPath: 'assets',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test:/\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader',
      },
    ],
  },
};
