var path = require('path');
var webpack = require('webpack');

module.exports = env => {
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        entry: './client/index.js',
        output: {
            path: path.resolve(__dirname, 'public', 'build'),
            filename: 'app.bundle.js'
        },
        module: {
            loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    loaders: 'style-loader!css-loader',
                }, {
                    test: /\.(jpe?g|gif|png|otf|ttf)$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin(envKeys)
        ],
        devtool: 'source-map'
    }
};