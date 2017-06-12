const path = require('path');
const webpack = require('webpack');
/*const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");*/
/*const AssetsPlugin = require('assets-webpack-plugin');*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        entry: {
            main: ['./src/js/discovery/index.js', 'art-template'],
            vendor: ['moment', 'lodash']
        },
        output: {
            filename: './js/discovery/[name].[chunkhash].js',
            path: path.resolve(__dirname, 'm')
        },
        module: {
            loaders: [
                {test: /\.json$/, loader: 'json-loader'},
                {test: /\.jpg$/, loader: "file-loader"},
                {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
                {
                    test: /\.art$/,
                    loader: "art-template-loader",
                    options: {
                        // art-template options (if necessary)
                        // @see https://github.com/aui/art-template
                    }
                }, {
                    test: /\/scss\/discovery\.scss/,
                    use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor', 'manifest']
            }),
            /*new webpack.optimize.UglifyJsPlugin(),*/
            /*new AssetsPlugin({
             filename: 'manifest.json',
             path: path.join(__dirname, './'),
             prettyPrint: true,
             update: true
             }),*/
            /*new ChunkManifestPlugin({
             filename: "chunk-manifest.json",
             manifestVariable: "webpackManifest"
             }),*/
            new HtmlWebpackPlugin({
                /*title: '发现',*/
                filename: './html/discovery/index.html',
                template: 'src/html/discovery/index.art'
            })
        ],
        target: 'node',
        devServer: {
            /*contentBase: "./m",*/
        }
    }
};