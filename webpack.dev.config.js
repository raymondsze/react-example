var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.entry = {
	index: ['webpack-dev-server/client?http://localhost:8081', 'webpack/hot/only-dev-server', './src/index.js']
};

webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

webpackConfig.devtool = 'source-map';

webpackConfig.output.publicPath = 'http://localhost:8081/build';

module.exports = webpackConfig;
