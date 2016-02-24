/**
 * Created by yan on 16-2-22.
 */
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app', 'index.es6'),
  output: {
    filename: 'bundle.js',
    path: '/',
    pathinfo: true
  },
  module: {
    loaders: [{
      test: /\.(js|es6)/,
      loader: 'babel',
      exclude: path.join(__dirname, 'node_modules')
    }]
  }
}