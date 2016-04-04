'use strict';

// Buffer is a global object in Node
const buf = new Buffer('Byrdann Fox', 'utf8');
buf.toString();
buf.toJSON();
buf[2];
buf.write('wo');

module.exports = buf.toString();