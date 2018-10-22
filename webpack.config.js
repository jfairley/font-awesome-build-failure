const webpackMerge = require('webpack-merge');
const webpackAngularExternals = require('webpack-angular-externals');
const commonConfig = require('./common/webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'source-map',

    output: {
        path: __dirname + "/dist",
        publicPath: 'dist/',
        filename: "test.[name].js",
        library: 'test',
        libraryTarget: 'umd'
    },

    externals: [
        webpackAngularExternals()
    ]
});
