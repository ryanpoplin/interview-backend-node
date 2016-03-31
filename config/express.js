'use strict';

const express = require('express'); 
const request = require('superagent');

module.exports = function() { 
	const app = express(); 
	require('../datafeed/data.feed')(); 
	return app;
};
 
 /* ## Task 2 (of 2)
 *
 * Configure the project to execute ESLint on all JavaScript files in the
 * project using the included .eslintrc configuration when `npm test` is run.
 * DO NOT use Grunt or Gulp.  The test should pass.
 *
 *
 *
 *
 * ## Extra Credit
 *
 * Write a unit test to validate that the JSON ouput is valid and matches the
 * expected schema.
 */