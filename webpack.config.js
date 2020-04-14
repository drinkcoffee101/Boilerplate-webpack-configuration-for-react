const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //this is where te entire react structure will be 
    entry: './src/index.js',
    //where the complied code will go
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                //look for all js/x files 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        //create an index.html to serve our bundled files
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}