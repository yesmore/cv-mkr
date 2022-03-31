const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  // mode 等价于我们在 DefinePlugin 中定义了 process.env.NODE_ENV
  mode: 'development',
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
