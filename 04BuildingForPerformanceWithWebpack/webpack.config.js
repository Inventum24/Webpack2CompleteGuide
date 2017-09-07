const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config={

    entry: './src/index.js', //relative
    output: {
        path:path.resolve(__dirname,'build'),//absolut
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
              loader: 'babel-loader',
              //options: { presets: ['es2015'] },
            }],
          },
          /*{
            use: ['style-loader', 'css-loader'],
            test: /\.css$/
          }*/
          {
            loader: ExtractTextPlugin.extract({
              loader: 'css-loader'
            }),
            test: /\.css$/
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/,
            use:[
              {loader:'url-loader',
               options:{limit:40000}},
              'image-webpack-loader']
          }
        ]
        },
    plugins:[
      new ExtractTextPlugin('style.css')
    ]
}

module.exports = config;