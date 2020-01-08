const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    inline:true,
    port: 3000
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc.json',
          fix: true
        }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      fix: true
    })
  ]
}
