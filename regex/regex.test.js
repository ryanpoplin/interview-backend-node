'use strict';

// make this a module so that I can test for matches during development and testing

const _ = require('lodash');

function getMatches (rgx, text) {
	const deep = _.cloneDeep([rgx]),
		rgxClone = deep[0],
		results = [];
	var match, i = 0;
	while (rgx.exec(text) !== null) {
		match = rgxClone.exec(text);
		console.log(match.index);
		if (match.index === 0 && i === 0) {
			++i;
			results.push(match);
		} else if (match.index === 0 && i > 0) {
			break;
		} else {
			results.push(match);
		}
	}
	console.log(results);
	return results;
}

function getMatchesCountString (results) {
	if (results.length > 0) {
		console.log(`There are ${results.length} matches`);
	} else {
		console.log('There are 0 matches');
	}
}

// /^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,7})+$/gi
const matches = getMatches(/aa  /, 'aa  ');
getMatchesCountString(matches);

// module.exports = {

// };