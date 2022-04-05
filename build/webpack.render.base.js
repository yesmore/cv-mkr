/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpack = require('webpack');

const smp = new SpeedMeasurePlugin();

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
    setting: path.resolve(__dirname, '../app/renderer/windowPages/setting/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
    },
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/windowPages/setting/index.html'),
      filename: path.resolve(__dirname, '../dist/setting.html'),
      chunks: ['setting'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../assets'),
          to: path.resolve(__dirname, '../dist/assets'),
        },
        // {
        //   from: path.resolve(__dirname, '../config'),
        //   to: path.resolve(__dirname, '../dist/config'),
        // },
      ],
    }),
    // 优化
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dist/dll/reacts.dll.js'),
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dist/dll/reacts.manifest.json'),
    }),
  ],
};
