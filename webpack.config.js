const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:"[name].css",
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