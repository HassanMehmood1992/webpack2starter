var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    entry:"./src/app.js",
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'app.bundle.js'
    },

    module:{
        rules:[
            {
                test:/\.scss$/,
                 use:ExtractTextPlugin.extract({

                    fallbackLoader:'style-loader',
                    loader:['css-loader','sass-loader'],
                    publicPath:'/dist'
                 })
                }
            ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        
      },
    
    plugins: [new HtmlWebpackPlugin({
            title: 'My App',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            template: './src/index.ejs'
        }),
        new ExtractTextPlugin({

            filename:'app.css',
            disabled:false,
            allChunks:true

        })
]
}