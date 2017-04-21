// webpack.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    'array/filter': './array/filter/index.js',
    'array/map': './array/map/index.js',
    'array/reduce': './array/reduce/index.js',
    'array/reduceRight': './array/reduce/index.js',
    'length': './length/index.js',
    'combine': './combine/index.js',
    'compose/index': './compose/index.js',
    'compose/map': './compose/map.js',
    'console/log': './console/log.js',
    'number/parse': './number/parse.js',
    'number/toExponential': './number/toExponential.js',
    'number/toFixed': './number/toFixed.js',
    'number/toLocaleString': './number/toLocaleString.js',
    'number/toPrecision': './number/toPrecision.js',
    'number/toString': './number/toString.js',
    'number/valueOf': './number/valueOf.js',
    'object/assign': './object/assign/index.js',
    'string/concat': './string/concat.js',
    'string/endsWith': './string/endsWith.js',
    'string/includes': './string/includes.js',
    'string/indexOf': './string/indexOf.js',
    'string/lastIndexOf': './string/lastIndexOf.js',
    'string/parse': './string/parse.js',
    'string/split': './string/split.js',
    'string/toUpperCase': './string/toUpperCase.js',
    'string/trim': './string/trim.js',
  },
  output: {
    path: path.join(__dirname, '/package'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve('./src')],
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve('src'), 'node_modules'],
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
}
