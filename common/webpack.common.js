const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: process.env.CI ? 3 : require('os').cpus().length - 1});

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',

    resolve: {
        extensions: ['.scss', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'happypack/loader?id=ts'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.gif|png|jpg|svg|woff|woff2|ttf|eot|ico(\?v=\d\.\d\.\d)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                // handle Angular component styles
                test: /\.scss$/,
                use: [
                    'raw-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true
        }),

        new HappyPack({
            id: 'ts',
            threadPool: happyThreadPool,
            loaders: [
                {
                    loader: 'ts-loader',
                    options: {
                        happyPackMode: true,
                        transpileOnly: true
                    }
                },
                {
                    loader: 'angular2-template-loader'
                }
            ]
        }),

        new SimpleProgressWebpackPlugin({
            format: process.env.CI ? 'expanded' : 'minimal'
        })
    ]
};
