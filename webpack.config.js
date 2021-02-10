const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ] },
    {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
]
console.log("__dirname", __dirname)
module.exports = {
    target: 'web',
    mode: "development",
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    devServer: {
        contentBase: './public/',
        port: 5000,
        compress: true
    },
}