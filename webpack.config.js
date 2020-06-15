const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require ('html-webpack-plugin');

const config = {
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/asset/'
    },
    module:{
  
    },
    plugins:[
       
    ],
    devServer : {
        historyApiFallback:true,
        inline:true,
        hot:true,
        port:3000,
    }
}
module.exports = config;