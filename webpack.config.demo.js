const path = require('path');
const webpack = require('webpack');

const CleanPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const buildDir = path.resolve(__dirname, 'dist');

// const reactExternal = {
//   root: 'React',
//   commonjs2: 'react',
//   commonjs: 'react',
//   amd: 'react'
// };
// const reactDOMExternal = {
//   root: 'ReactDOM',
//   commonjs2: 'react-dom',
//   commonjs: 'react-dom',
//   amd: 'react-dom'
// };

module.exports = {
  mode: env,
  entry: {
    // main: './src/index.ts',
    demo: './src/demo.tsx',
    html: './src/index.html',
  },
  // externals: {
  //   'react': reactExternal,
  //   'react-dom': reactDOMExternal
  // },
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
    // libraryTarget: 'umd',
    // library: 'ReactNim',
  },
  module: {
    rules: [
      { test: /\.html$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.ts|\.tsx$/, loader: ['babel-loader', 'awesome-typescript-loader'], include: __dirname },
      // { test: /\.js|\.jsx$/, loader: 'babel-loader', include: __dirname },
      { test: /\.svg$/, use: ['url-loader'] },
    ]
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new CleanPlugin([
      `${buildDir}/*`,
    ]),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new ManifestPlugin(),
  ]
};
