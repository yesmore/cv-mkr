const webpackMerge = require('webpack-merge');
const dllBaseConfig = require('./webpack.dll.base.js');

module.exports = webpackMerge.merge(dllBaseConfig, {
  mode: 'production',
});
