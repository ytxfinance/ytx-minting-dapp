const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: process.env.NODE_ENV === 'production' ? '' : 'eval-source-map',
    entry: [
        '@babel/polyfill',
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 2
                }
            }, 'stylus-loader'],
            include: /src/
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
            include: /src/
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=/public/icons/[name].[ext]"
        }]
    },
    plugins: [
        new htmlPlugin({
            title: "NFT Minting App",
            template: './src/index.ejs',
            hash: true
        }),
    ]
}
