/**
 * Created by yan on 16-2-22.
 */

var express = require('express');
var path = require('path');
var webpack = require("webpack");
var oneapmMiddleware = require('oneapm-sdk').middleware;
var webpackDevMiddleware = require("webpack-dev-middleware");

var app = express();
var config = require(path.join(__dirname, 'webpack.config.js'));
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(oneapmMiddleware);

app.listen(8081);