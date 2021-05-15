const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react',  ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                }
            },
            {
                test: /\.less$/i,
                use: [
                    // 本意不想在服务端配置进行拆离的，但不加的时候，服务端 CSS modules 会有问题
                    // 所以干脆都加上 MiniCssExtractPlugin 了
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'global',
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        },
                    },
                ],
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    })],
}