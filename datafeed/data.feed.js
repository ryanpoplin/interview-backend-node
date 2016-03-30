'use strict';

module.exports = function() {
	const request = require('superagent');
	const dataUrl = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';
	request.get(dataUrl).end(function(err, res) {
		(err) ? console.log(err) : console.log([JSON.stringify(res.body)]);
		// run a method here to transform the data accordingly, invoke in the ternary above.
		// this will do all the things and log to the console the [{}, {}, {}] an array of article objects...
	});
};