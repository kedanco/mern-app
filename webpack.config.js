var path = require("path");

const webpack = require("webpack");

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "./public/bundle.js",
		path: path.resolve(__dirname, "public")
	},
	watch: true,
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-1"]
				}
			}
		]
	}
};
