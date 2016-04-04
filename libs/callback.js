'use strict';

function greet(callback) {
	callback();
}
greet(function() {
	console.log('a callback function...');
});