let path = require('path')
let VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 编译模式
                        presets: ['@babel/preset-env'],
                        // 插件集合
                        plugins: []
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}