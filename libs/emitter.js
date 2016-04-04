'use strict';

// core event emitter class

function Emitter() {
	// event container
	this.events = {};
}
Emitter.prototype.on = function (type, listener) {
	this.events[type] = this.events[type] || []; // either the return value of the current state of {[type]}, or []
	this.events[type].push(listener); // add functions to be executed to the event array of listeners
};
Emitter.prototype.emit = function (type) {
	if (this.events[type]) { // if the property of events exists, 
		this.events[type].forEach((listener) => { // invoke all of the functions in the events array
			listener();
		});
	}
};

module.exports = Emitter;

// import Emitter from '../libs/emitter';
// const emitter = new Emitter();

// emitter.on('go', () => {
// 	console.log('an event occured');
// });
// emitter.on('go', () => {
// 	console.log('another event occured');
// });
// emitter.emit('go');