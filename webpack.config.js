const path = require('path');
const webpack = require('webpack');
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = (env) => {
    return {
        entry: {
            main: './app/index.js',
            vendor: 'moment'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'/*,
                 minChunks: function (module) {
                 return module.context && module.context.indexOf('node_modules') !== -1;
                 }*/
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }), /*
             new webpack.optimize.UglifyJsPlugin({
             sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
             }),*/
            new AssetsPlugin({
                filename: 'manifest.json',
                path: path.join(__dirname, './'),
                prettyPrint: true,
                update: true
            }),
            new ChunkManifestPlugin({
                filename: "chunk-manifest.json",
                manifestVariable: "webpackManifest"
            })
        ]
    }
};