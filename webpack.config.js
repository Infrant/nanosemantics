const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV.trim() === 'development'

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: isDevelopment && 'source-map',
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.module\.(css|s[ac]ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]'
                            },
                            sourceMap: isDevelopment
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        },
                    },
                ],
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        },
                    },
                ],
                exclude: /\.module\.(css|s[ac]ss)$/,
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'loose': true
                                }
                            ],
                            [
                                '@babel/preset-react',
                                {
                                    'runtime': 'automatic'
                                }
                            ],
                            '@babel/preset-typescript'
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'})
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src/components/')
        }
    }
};
