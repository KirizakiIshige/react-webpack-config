const path = require('path');
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "development" }) => {
  console.log(`mode is: ${mode}`);

  return webpackMerge(
    {
    mode,
    entry: "./src/index.js",
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: "babel-loader"
        }]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
},
modeConfiguration(mode)
  );
};