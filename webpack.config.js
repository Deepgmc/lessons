let path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    devtool: 'source-map',

    entry: path.resolve(__dirname, 'src') + '/root.js',

    output: {
       path: path.resolve(__dirname, 'public'),
       filename: 'bundle.js',
       publicPath: '/public/'
    },
    module: {
        rules: [
            { test: /\.css$/, exclude: '/node_modules', use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: '/node_modules', use: 'babel-loader' }
        ]
    }
};