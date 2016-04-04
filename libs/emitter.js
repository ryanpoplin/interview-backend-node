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

// core emitter class usage:

// const eventConfig = require('./config').events;

// const emitter = new Emitter();
// emitter.on(eventConfig.EVENT, () => {
// 	console.log('event 1');
// });
// emitter.on(eventConfig.EVENT, () => {
// 	console.log('event 2');
// });
// emitter.emit(eventConfig.EVENT);

// import EventEmitter from 'events';
// import util from 'util';

// function Greetr() {
// 	this.greeting = 'Hello World'; 
// }
// util.inherits(Greetr, EventEmitter);
// Greetr.prototype.greet = function(data) {
// 	console.log(this.greeting);
// 	this.emit('greet', data);
// };
// const greetr1 = new Greetr();
// greetr1.on('greet', function(data) {
// 	console.log('Someone greeted!');
// 	console.log(data);
// });
// greetr1.greet('Some extra data for the event listener to provide...');