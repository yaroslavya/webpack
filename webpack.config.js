'use strict';

const webpack = require('webpack');

var BUILD_ENV = process.env.BUILD_ENV;
var IS_DEV = BUILD_ENV == 'development';

/* Plugins */
var definePlugin = new webpack.DefinePlugin({    
    IS_DEV: JSON.stringify( IS_DEV )
});

var bannerPlugin = new webpack.BannerPlugin("Best Gaming Technology", {entryOnly:true});

var noErrorsPlugin = new webpack.NoErrorsPlugin();
var commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: "common"
});
/* Plugins end */

module.exports = {
    context: __dirname + "/src",
    entry: {
        home: "./main",
        about: "./about"
    },
    output: {  
    path: __dirname + "/public",
          filename: "[name].js"
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']                    
                }
                /*,
                exclude: /(node_modules|bower_components)/*/
            },
            {
                test: /\.ts/,
                loader: 'webpack-typescript?target=ES5',
                /*exclude: /(node_modules|bower_components)/*/
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.ts'],
        modulesDirectories: ['node_modules']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*']
    },
    /* webpack execute build on every change in the source files */
    watch: IS_DEV,
    watchOptions: {
        /* threshold to rebuild src on change in any file */
        aggregateTimeout: 300
    },

    /* add source map for debug capabilities in chrome */
    devtool: IS_DEV ? 'eval': null,

    plugins: [definePlugin, bannerPlugin, noErrorsPlugin, commonChunksPlugin]
}