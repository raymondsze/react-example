var webpack = require('webpack');
module.exports = {
	entry: {
		index: ['./src/index.js']
	},
	resolve: {
		modulesDirectories: ['node_modules']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		})
	],
	output: {
		path: __dirname + '/build/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{include: /\.jsx?$/, loaders: ['babel', 'eslint']}
		]
	}
};
