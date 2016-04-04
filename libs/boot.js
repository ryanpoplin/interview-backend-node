'use strict';

module.exports = (app) => {
	app.listen(app.get('port'), () => {
		console.log(`NTask API - Port ${app.get('port')}`);
		require('./es6.classes').greet('boot.js');
	});
};