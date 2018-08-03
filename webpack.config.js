const path = require('path');
const webpack = require('webpack');

module.exports = {
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: '/\.json$/',
            loader: 'json-loader'
        },{
            test: '/\.(png|jpg|woff||woff2)$/',
            loader: 'url-loader?limit=8129'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        open: true,
        historyApiFallback: true,
        compress: true,
        overlay: {
            warnings: true,
            errors: true,
        },
        stats: {
            colors: true
        },
        port: 3001
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}