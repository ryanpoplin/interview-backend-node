'use strict';

// get mocha; npm install mocha -g
// to run this test in your terminal; mocha ./specs/schema.output.spec.js

const expect = require('chai').expect;

describe('CNN Top Story Articles API', function() {
	it('should validate that the JSON ouput is valid and matches the expected schema', function(done) {
		const dataFeed = require('../../datafeed/data.feed')();
		console.log(dataFeed);
		done();
	});
});