const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('../common/webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    entry: './playground/main.playground.ts',
    resolve: {
        alias: {
            'sandboxes': __dirname + '/src/sandboxes.ts'
        }
    },

    output: {
        publicPath: 'http://localhost:9002/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            chunksSortMode: 'none',
            template: 'playground/index.html'
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
