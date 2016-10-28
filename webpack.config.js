const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
    entry: [path.resolve(__dirname, 'app/src/router.jsx'),
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
    ],
    output: {
        path: buildPath,
        filename: 'build.js',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/, // All .js files
            loaders: ['babel-loader?presets[]=es2015&presets[]=react'], // react-hot is like browser sync and babel loads jsx and es6-7
            exclude: [nodeModulesPath]
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style-loader!css-loader' // Run both loaders
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.less$/,
            loader: 'css-loader!less-loader'
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }]
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
        }),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin()

    ],
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, 'node_modules')],
        extensions: ['', '.web.js', '.js', '.json'],
    }
};

module.exports = config;
