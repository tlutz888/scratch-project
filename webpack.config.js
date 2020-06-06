const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    // might need to be '/' and match output publicpath
    publicPath: '/build/',
    // might need to change to 'build'
    contentBase: path.resolve(__dirname, './client'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    proxy: {
      '*': {
        target: 'http://localhost:3000/',
        secure: false,
      }
    },
    
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  }
}
