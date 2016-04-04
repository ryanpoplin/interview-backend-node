'use strict';

import fs from 'fs';
import zlib from 'zlib';

const readable = fs.createReadStream(`${__dirname}/lorem.ipsum.txt`/*, {
	encoding: 'utf8',
	highWaterMark: 16 * 1024
}*/);

const writable = fs.createWriteStream(`${__dirname}/lorem.ipsum.copy.txt`/*, {
	encoding: 'utf8',
	highWaterMark: 16 * 1024
}*/);

const compressed = fs.createWriteStream(`${__dirname}/lorem.ipsum.copy.txt.gz`/*, {
	encoding: 'utf8',
	highWaterMark: 16 * 1024
}*/);

// transform stream (readable and writable stream and compresses each chunk of data)
const gzip = zlib.createGzip(); // compressing stream

module.exports = {
	readable: readable,
	writable: writable,
	gzip: gzip,
	compressed: compressed
};

// readable.on starts the streaming process...
// streams.readable.on('data', function(chunk) {
// 	streams.writable.write(chunk);
// });
// same as above...

// const streams = require('../libs/write.stream');
// streams.readable.pipe(streams.writable);
// streams.readable.pipe(streams.gzip).pipe(streams.compressed);