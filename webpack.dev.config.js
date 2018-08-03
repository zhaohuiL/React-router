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
        port: 8000,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}