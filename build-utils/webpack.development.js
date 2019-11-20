const path = require('path');
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = () => ({
  devtool: 'inline-source-map',
  devServer: { contentBase: './dist', hot: true, open: true },
  entry: { main: './src/index.js' },
  target: "node",
  externals: [nodeExternals()],
  output: {
    publicPath: "/",
    path: path.resolve('my-react', __dirname, 'dist'),
    filename: '[name].[hash].js'
  },
    module: {
      rules: [
        {
          test: /\.sa?css$/,
          use: [ 'style-loader',  MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
      new WebpackMd5Hash(),
    ]
  });

