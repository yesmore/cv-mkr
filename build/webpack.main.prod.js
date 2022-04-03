const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const prodConfig = {
  // 生产环境
  mode: 'production',
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    // 添加此全局变量, 用于打包后的主进程中正确获取__dirname
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);
