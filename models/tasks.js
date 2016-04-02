'use strict';

// not using app for anything just yet
module.exports = (/*app*/) => {
	return {
		findAll: (params, callback) => {
			return callback([
				{title: 'Buy some shoes'}, 
				{title: 'Fix notebook'}
			]);
		}
	};	
};