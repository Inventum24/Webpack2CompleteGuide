const path = require('path');

const config={

    entry: './src/index.js', //relative
    output: {
        path:path.resolve(__dirname,'build'),//absolut
        filename: 'bundle.js'
    },
    //debug: true,
    devtool: 'inline-source-map'
}

module.exports = config;