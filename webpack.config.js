let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: 'src/'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'Kentucky Seal Generator',
      template: '!!pug-loader!src/index.pug'
    }),
    new CopyWebpackPlugin([
      { from: 'seal.svg', to: '[name].[ext]' },
      {
        from: 'img/*.png',
        to: 'img/[name].[ext]',
      },
      { from: 'manifest.json' }
    ])
  ]
}
