const Path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.js')
// 打包json文件
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const WebpackNodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
    mode: 'production',
    target: 'node', // 打包出来给node 用
    entry: {
        server: Path.resolve(__dirname, '../src/server-entry.js'),
    },
    // 第三方模块不需要打包，因为js是在node中运行，默认是可以使用第三方的库，require
    externals:[WebpackNodeExternals()],
    output: {
        // 打包后为 module.exports ， 而不是闭包子调用函数
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin(),
        // 把index-ssr 拷贝到 dist目录下
        new HtmlWebpackPlugin({
            filename: 'index-ssr.html',
            template: Path.resolve(__dirname, '../public/index-ssr.html'),
            // 排除script的引入,index-ssr只需要引入client.js就可以
            excludeChunks:['server']
        })
    ]
})