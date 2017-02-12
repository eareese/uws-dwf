let path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: 'public/'
  },
  node: {
    fs: 'empty'
  },
}
