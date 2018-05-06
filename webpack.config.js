var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry:"./src/app.js",
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'My App',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            template: './src/index.ejs'
        }   
    )]
}