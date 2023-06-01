const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    static: "./public",
    port: 9000
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
          ecma: 6,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
        'css-loader', // Interpreta @import, url()...
        'sass-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      type: "asset/resource"
    }]
  }
}