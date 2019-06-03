const Path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');
// 打包json文件
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        client: Path.resolve(__dirname, '../src/client-entry.js'),
    },
    plugins: [
        new VueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: Path.resolve(__dirname, '../public/index.html')
        })
    ]
})