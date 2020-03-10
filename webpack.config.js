const { resolve } = require("path");
const fs = require("fs");
const Webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const extractHTML = new ExtractTextWebpackPlugin("[name].html");
const extractAssets = new CopyWebpackPlugin([
	{ from: "source/index.html" },
	{ from: "source/models", to: "assets/models" }
]);

module.exports = {
	mode: process.env.NODE_ENV,
	devtool: "source-map",
	entry: {
		index: "./source/index.js"
	},
	output: {
		path: resolve(__dirname, "./build"),
		filename: "[name].js"
	},
	resolve: {
		extensions: [".js", ".json"],
		alias: {
			"~": resolve(__dirname, "./source")
		}
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js)$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					failOnError: true
				}
			},
			{
				test: /\.html$/,
				use: extractHTML.extract({
					fallback: "raw-loader",
					use: ["html-loader"]
				})
			},
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		extractAssets
	]
};