const path = require('path');

module.exports = {
    entry: {
        // 入口
        index: './src/index.js'
    },
    output: {
        // 出口
        // 绝对路径 将文件打包到名为dist的文件下
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名字为 [name].js 就是打包之前的名字 也可以自己写死就叫aaa等
        filename: '[name].js'
    },
    module: {
        // 配置loader 将其他类型文件转为js
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}

