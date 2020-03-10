const os = require("os");
const path = require("path");
const express = require("express");
const cors = require("cors");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");

const IP = (( interfaces )=>{

	return Object.values(interfaces).flat(1).filter(interface => interface.family === "IPv4" && interface.internal === false).map(interface => interface.address)[0] || "localhost";

})(os.networkInterfaces());

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = new express.Router();

const { port, whitelist } = require("./config.js");

const URL = `http://${ IP }:${ port }`;

if( process.env.NODE_ENV == "development" ){

	console.log("dev", config.output.path);

	app.use(webpackDevMiddleware(webpack(config), {
		publicPath: config.output.path
	}));

}

app.use(express.static(path.join(__dirname, "build")));

app.listen(port, IP, ()=>{

	console.log(`\r\n\r\nSERVER LISTENING ON ${ URL }\r\n\r\n`);

});