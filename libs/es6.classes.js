'use strict';

import EventEmitter from 'events';
import util from 'util';

class Person extends EventEmitter  {
	// Person
	constructor(firstname, lastname) {
		super(); // same as saying: EventEmitter.apply(this); or EventEmitter.call(this); (access to methods & props directly on the Person instances)
		this.firstname = firstname;
		this.lastname = lastname;
	}

	// Person Prototype
	greet(data) {
		console.log(`${this.firstname} ${this.lastname}`);
		this.emit('greet', data);
	}
}

const person = new Person('Ryan', 'Poplin');
person.on('greet', function(data) {
	console.log(data);
});

module.exports = person;