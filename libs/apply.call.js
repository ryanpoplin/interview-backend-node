'use strict';

// very useful for classical based programming patterns in JavaScript
 
const obj = {
	name: 'Ryan Poplin',
	greet: function(param1, param2) {
		console.log(`Hello, ${this.name} ${param1} ${param2}`);
	}
};

// const value = obj.greet();

// const valueCall = obj.greet.call({
// 	name: 'Byrdann Fox'
// }, 'asdfjkl;');

// function Super() {
// 	this.super = 'Super';
// }
// Super.prototype.logger = function() {
// 	console.log(this.super);
// };	

// function Sub() {
// 	Super.call(this);
// 	this.sub = 'Sub';
// }
// util.inherits(Sub, Super);
// const sub = new Sub();
// sub.logger();

const valueApply = obj.greet.apply({
	name: 'Fox Byrdann'
}, [';lkjfdsa', 'asdfjkl;']);

module.exports = valueApply;

// require('../libs/apply.call');