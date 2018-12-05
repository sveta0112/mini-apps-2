const path = require('path');
var SRC_DIR = path.join(__dirname,'client/src');
var DIST_DIR = path.join(__dirname,'public/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
  	rules: [
      {
      	test:/\.jsx?$/,
      	exclude: /(node_modules|bower_components)/,
      	include: SRC_DIR,
      	loader: 'babel-loader',
      	query: {
      		presets: ['@babel/preset-env','@babel/preset-react']
      	}
      }
  	]
  }
};