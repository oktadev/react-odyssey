const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const buildDir = path.resolve(__dirname, 'dist');

module.exports = {
  mode: env,
  entry: {
    main: './demo/demo.tsx',
    html: './demo/index.html',
  },
  devServer: {
    contentBase: './dist',
    // compress: true,
    port: 3000,
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: buildDir,
    publicPath: '/',
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
              implementation: require('sass'),
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new ManifestPlugin(),
  ]
};
