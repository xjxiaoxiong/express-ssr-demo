const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.base');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const AssetsManifestPlugin = require('assets-manifest-plugin');

const clientConfig = {
    mode: 'development',
    entry: './client/index.js',
    // devtool: "source-map",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
   /* module: {
        rules: [
            /!*{
                test: /\.less/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    // options: { modules: true }
                }, 'less-loader'],
            }*!/
        ],
    },*/
    /*plugins: [new AssetsManifestPlugin({
        filename: 'asserts.json',
        minify: true
    })],*/
    plugins: [new WebpackManifestPlugin({})],
}

module.exports = merge(config, clientConfig);
