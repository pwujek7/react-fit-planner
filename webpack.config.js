const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js']
  },
  output: {
    publicPath: '/',
    chunkFilename: '[id].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
};
