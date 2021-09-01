const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') включить на продакшн

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './UIkit/index.pug',
    headersFooters: './UIkit/headersFooters/headersFooters.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './UIkit/index.pug',
      chunks: ['index']
      // чанки это и есть точки входа. Если они 
      // включены, то страница использует только этот js, а если чанка нет,
      // то подключает все js из точек входа.
    }),
    new HTMLWebpackPlugin({
      filename: 'headersFooters.html',
      template: './UIkit/headersFooters/headersFooters.pug',
      chunks: ['headersFooters']
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css'
    // })     подключить после всей верстки, чтоб вынести в отдельный  минимизированный файл Сss 
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // на продакшн заменить style-loader на MiniCssExtractPlugin.loader
      },
      {
        test: /.(png|jpg|svg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        },
        exclude: path.resolve(__dirname, 'src/fonts')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',

        include: path.resolve(__dirname, 'src/fonts'),
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}