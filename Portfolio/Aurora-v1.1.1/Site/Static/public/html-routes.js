var path = require('path');
var express = require('express');
var app = express();

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile('index.html', { root: __dirname });
	});

}