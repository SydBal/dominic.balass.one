// Webpack config shared by production and development environment s
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../../'),
  resolve: {
    alias: {
      Backend: path.resolve(__dirname, './backend'),
      Frontend: path.resolve(__dirname, './frontend')
    }
  },
  entry: {
    app: './frontend/app/components/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/react'
            ]
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../frontend/public'),
    publicPath: '/'
  }
}
