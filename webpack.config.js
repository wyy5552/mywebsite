const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true, // 指定启用css modules
                    }
                }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
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