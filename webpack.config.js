const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 entry: {
    main: './src/index.js',
    login: './src/page/login/login.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // <-- gunakan nama sesuai entry (main.bundle.js, login.bundle.js)
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: './src/page/adminpage/dashboard.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'dataibu.html',
      template: './src/page/adminpage/dataibu.html',
      chunks: ['dataibu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dataanak.html',
      template: './src/page/adminpage/dataanak.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'datalayanananak.html',
      template: './src/page/adminpage/datalayanananak.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'datalayananibu.html',
      template: './src/page/adminpage/datalayananibu.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/page/home/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/page/login/login.html',
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      filename: 'registeruser.html',
      template: './src/page/login/registeruser.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'DashboardUser.html',
      template: './src/page/userpage/DashboardUser.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'GrowEats.html',
      template: './src/page/userpage/GrowEats.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'GrowCheck.html',
      template: './src/page/userpage/GrowCheck.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/image', to: 'image' }],
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
  },
};
