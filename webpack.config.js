if (!process || !process.env || !process.env.PWD || !process.env.PWD.length) {
  process.exit(1);
}

const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const outputFolder = `${process.env.PWD}/dist`;

module.exports = {
  entry: {
    app: ['@babel/polyfill/noConflict', './src/index.tsx'],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  output: {
    filename: '[name].bundle.js',
    path: outputFolder,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          'ts-loader'
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    // new CleanWebpackPlugin(outputFolder),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      DIRNAME: JSON.stringify(process.env.PWD),
    }),
  ],
};
