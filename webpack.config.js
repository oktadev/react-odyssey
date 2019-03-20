const path = require('path');
const webpack = require('webpack');

const CleanPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const buildDir = path.resolve(__dirname, 'dist');

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};

const webpackConfig = {
  mode: env,
  entry: {
    main: [
      './src/index.js'
    ]
  },
  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: buildDir,
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactNim',
  },
  module: {
    rules: [
      { test: /\.ts|\.tsx|\.js|\.jsx$/, loader: ['babel-loader', 'awesome-typescript-loader'], include: __dirname },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.svg$/, use: ['url-loader'] },
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      automaticNameDelimiter: '.' // Google Cloud Storage doesn't like it when ~ is in the filename.
    },
    runtimeChunk: false,
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',
  plugins: []
};

const plugins = [
  new CleanPlugin([
    `${buildDir}/*`,
  ]),
  new webpack.NamedModulesPlugin(),
];

if (env === "production") {
  plugins.push(new ManifestPlugin());

  webpackConfig.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
  ];
}

webpackConfig.plugins = plugins;

module.exports = webpackConfig;
