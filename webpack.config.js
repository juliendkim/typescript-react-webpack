const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

exports.default = {
    output: {
        path: path.resolve('dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    mode: process.env.NODE_ENV || 'development',
    entry: {
        client: path.join(__dirname, '/src/index.tsx')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.(png|jp(e*)g|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]?[hash]'
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es6']
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve('static/**/*'),
                to: path.resolve('dist'),
                flatten: true,
                force: true,
                ignore: ['*.html']
            }
        ]),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('static/index.html')
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: false,
            extractComments: true,
        })
    ],
    devServer: {
        port: 3000,
        hot: true
    },
    // devtool: 'cheap-module-source-map'
};
