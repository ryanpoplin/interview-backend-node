'use strict';

module.exports = function() {
	const request = require('superagent');
	const dataUrl = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';
	request.get(dataUrl).end(function(err, res) {
		if (err) {
			console.log(err);
		} else {
			console.log(JSON.stringify(res.body));
		}
	});
};