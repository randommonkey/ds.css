const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded'
            }
          }
        ]
      }
    ] 
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../examples'),
    open: true,
    port: 8080,
    publicPath: '/dist/',
    stats: 'errors-only'
  },
  devtool: 'inline-source-map'
})
