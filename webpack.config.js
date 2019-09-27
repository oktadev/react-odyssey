const path = require('path');
const webpack = require('webpack');

const CleanPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

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
    main: './src/index.ts',
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
    library: 'ReactOdyssey',
  },
  module: {
    rules: [
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
      { test: /\.ts|\.tsx$/, loader: ['babel-loader', 'awesome-typescript-loader'], include: __dirname },
      // { test: /\.js|\.jsx$/, loader: 'babel-loader', include: __dirname },
      { test: /\.svg$/, use: ['url-loader'] },

    ]
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  devtool: 'source-map',
  plugins: []
};

const plugins = [
  new CleanPlugin([
    `${buildDir}/*`,
  ]),
  new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
  new ManifestPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "css/[id].css"
  }),
  new CopyPlugin([
    { from: './scss', to: './scss' },
  ]),
];

if (env === "production") {
  webpackConfig.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ];
}

webpackConfig.plugins = plugins;

module.exports = webpackConfig;
