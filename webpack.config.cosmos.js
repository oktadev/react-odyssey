const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const buildDir = path.resolve(__dirname, 'dist');

module.exports = {
  mode: env,
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: buildDir,
  },
  module: {
    rules: [
      { test: /\.html$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.ts|\.tsx$/, loader: ['babel-loader', 'awesome-typescript-loader'], include: __dirname },
      // { test: /\.js|\.jsx$/, loader: 'babel-loader', include: __dirname },
      { test: /\.svg$/, use: ['url-loader'] },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [require('autoprefixer')()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require('node-sass'),
              sourceMap: true,
              sassOptions: {
                fiber: require('fibers'),
              },
            }
          },
        ]
      },
    ]
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
  ]
};
