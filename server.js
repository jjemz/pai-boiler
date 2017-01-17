	

	var express = require('express');
	var routes = require('./app/routes/index.js');
	var mongoose = require('mongoose');

	var app = express();
	var port = process.env.PORT || 8080;
	var url = 'mongodb://sample:sample@ds157248.mlab.com:57248/paidb'

	mongoose.connect(url);


	app.use('/public', express.static(process.cwd() + '/public'));
	app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

	routes(app);

	app.listen(port, function(){
		console.log('Example app listening on port ' + port);
	});

