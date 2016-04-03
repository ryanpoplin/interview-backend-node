'use strict';

import bodyParser from 'body-parser';

module.exports = (app) => {
	app.set('port', 8080);
	app.set('json spaces', 4);
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
		next();
	});
	// app.use((req, res, next) => {
	// 	console.log(req.url);
	// 	console.log(req.body);
	// 	next();
	// });
};