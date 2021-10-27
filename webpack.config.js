const path = require('path');

module.exports = {
  mode: 'production',
  entry: './navigo-utils.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'navigo-utils.js',
    library: "navigo-utils",
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};