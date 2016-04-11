'use strict';

import fs from 'fs';

module.exports = function () {

	fs.readFile('./regex/access.log', function (err, data) {
		if (err) throw err;
		const text = data.toString();
		const lines = text.split('\n');
		lines.forEach(function (line) {
			console.log(line);
		});
	});

};