'use strict';

import fs from 'fs';

// 64 kilobyte limit per chunk, i.o.w's: 64,000 bytes, 512,000 bits, 8 bits in a byte
module.exports = fs.createReadStream(__dirname + '/lorem.ipsum.txt', {
	encoding: 'utf8',
	highWaterMark: 16 * 1024
});

// module.exports = fs.readFile(__dirname + '/lorem.ipsum.txt', function(err, data) {
// 	(err) ? console.log(err) : console.log(data.toString());
// });