var express = require('express');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb').MongoClient;


var app = express();
var port = process.env.PORT || 8080;
var url = 'mongodb://sample:sample@ds157248.mlab.com:57248/paidb'

mongo.connect(url, function(err, db){

	if (err) {
		throw new Error('failed to connect to database');
	} else {
		console.log('MongoDB successfully connected to: ' + url);
	}


	app.use('/public', express.static(process.cwd() + '/public'));
	app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

	routes(app, db);

	app.listen(port, function(){
		console.log('Example app listening on port ' + port);
	});


});