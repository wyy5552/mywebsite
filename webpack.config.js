const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(htm|html)$/,
                use: [
                    'raw-loader'
                ]
            },
            //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                  },
                  {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                  },
                  {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                  }
                ]
              }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name]-[hash].css",
            allChunks: true
        }),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                inject: true,
                template: path.resolve(__dirname, './public/index.html')
            }
        ),
    ],
    devServer: {
        contentBase: path.join(__dirname, '/'),
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 3000
    }
}
module.exports = config;