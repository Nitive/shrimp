'use strict'

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function(options) {
	var config = {
		entry: './app/app.jsx',
		output: {
			path: path.join(__dirname, 'build')
		},

		debug: true,
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new ExtractTextPlugin('style.css', {allChunks: true})
		],

		resolve: {
			root: path.join(__dirname, 'app'),
			extensions: ['', '.js', '.jsx'],
			modulesDirectories: [
				'app',
				'node_modules'
			],
		},

		resolveLoader: {
			root: [
				path.join(__dirname, 'node_modules'),
				__dirname
			]
		},

		devtool: 'eval',

		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: 'style!css'
				},
				{
					test: /\.scss$/,
					loader: 'style!css!sass'
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loaders: ['react-hot', 'babel']
				}
			]
		},

		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			port: 2992,
			hot: true
		}
	};

	var compiler = webpack(config);
	compiler.run(function () {
		console.log('wow');
	});

	return config;

}
