const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');
const PRODUCTION        = 'production';
const DEVELOPMENT       = 'development';
const TARGET            = process.env.npm_lifecycle_event;
const ENV               = process.env.npm_lifecycle_event.indexOf('build') !== -1 ? PRODUCTION : DEVELOPMENT;
const PATH = {
    app:   path.join(__dirname, 'app'),
    this:  path.join(__dirname, '..'),
    node:  path.join(__dirname, 'node_modules'),
    build: path.join(__dirname, '..', 'public')
};

var webpackConfig;

if (ENV === DEVELOPMENT) {
    webpackConfig = {
        entry: {
            main: path.join(PATH.app, 'index.jsx'),
        },
        resolve: {
            modules: [
                PATH.app,
                PATH.this,
                PATH.node
            ],
            extensions: ['.js', '.jsx']
        },
        output: {
            publicPath: '/',
            path: PATH.build,
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].js',
        },
        devtool: 'eval',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT,
            watchOptions: {
               aggregateTimeout: 300,
               poll: 2000
            }
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'},
                    ]
                },
                {
                    test: /\.json$/,
                    use: 'json-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|ico|gif|eot|woff|ttf|svg)$/,
                    use: 'file-loader?name=[path][name].[ext]',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(ENV)
            }),
            new htmlWebpackPlugin({
                template:     path.join(PATH.app, 'index.ejs'),
                appMountId:   'app',
                inject:       false
            }),
            // Enable multi-pass compilation for enhanced performance
            // in larger projects. Good default.
            new webpack.HotModuleReplacementPlugin({
                //multiStep: true
            })
        ]
    };
}


if (ENV === PRODUCTION) {
    webpackConfig = {
        entry: {
            main: path.join(PATH.app, 'index.jsx'),
        },
        resolve: {
            modules: [
                PATH.app,
                PATH.this,
                PATH.node
            ],
            extensions: ['.js', '.jsx']
        },
        output: {
            path: PATH.build,
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.json$/,
                    use: 'json-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|svg|ico|gif|eot|woff|ttf)$/,
                    use: 'file-loader?name=[path][name].[ext]',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: ['css-loader', 'postcss-loader', 'sass-loader']
                    }),
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                template:     path.join(PATH.app, 'index.ejs'),
                appMountId:   'app',
                inject:       false
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(ENV)
            }),
            new ExtractTextPlugin({
                filename:"[name].css"
            })
        ]
    };
}

module.exports = webpackConfig;
