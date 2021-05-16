const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.base');

const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.less/,
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    // options: { modules: true }
                }, 'less-loader'],
            }
        ],
    }
}

module.exports = merge(config, serverConfig);
