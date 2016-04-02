'use strict';

import bodyParser from 'body-parser';

// general express application middleware
module.exports = (app) => {
	app.set('port', 8080);
	app.set('json spaces', 4);
	app.use(bodyParser.json());
	app.use((req, res, next) => {
		console.log(req.url);
		console.log(req.body);
		next();
	});
};