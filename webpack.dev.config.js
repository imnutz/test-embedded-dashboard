const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        /* put 'bundle.js' to folder 'public' after transpiling, as same value as devServer.contentBase */
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        /* when inline is true, it enables 'auto refresh' and 'hot module replacement' */
        inline: true,
        /* default port for webpack-dev-server*/
        port: 3000,
        /* specify folder that webpack-dev-server will transpile bundle.js to, as same value as output.path */
        contentBase: 'public/',
        /* publicPath is virtual path on webpack server */
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            /* input html file */
            template: 'src/templates/index.html',
            /* output html file to virtual path , it is fully accessed by http://localhost/index.html */
            filename: 'index.html'
        })
    ]
};

module.exports = config;

/*


new webpack.NoEmitOnErrorsPlugin()
UglifyPlugin


* */