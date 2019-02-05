/*module.exports = {
    entry: {
        main: './src/scripts/main.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
*/
//
var path = require('path');

module.exports = {
entry: './src/scripts/main.js',
    resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
module: {
    rules: [
        { test: /.ts$/, loader: 'ts-loader' }
    ]
},
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    }
}