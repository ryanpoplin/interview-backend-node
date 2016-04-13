'use strict';

const _ = require('lodash');

function getMatches (rgx, text) {
	const deep = _.cloneDeep([rgx]),
		rgxClone = deep[0],
		results = [],
		resultsContainer = {};
	
	var match, 
		i;

	while (rgx.exec(text) !== null) {
		match = rgxClone.exec(text);
		if (match.index > i) {
			i = match.index;
			results.push(match);
		} else if (i === undefined) {
			i = match.index;
			results.push(match);	
		} else if (match.index === i) {
			break;
		}
	}

	if (results.length > 0) {
		resultsContainer.matches = `There are ${results.length} matches`;
	} else {
		resultsContainer.matches = 'There are 0 matches';
	}

	resultsContainer.results = results;
	console.log(resultsContainer);
	return resultsContainer;
}

// module.exports = {
// 	getMatches: getMatches
// };

// getMatches(/^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,7})+$/i, 'https://www.luupy.io');
// getMatches(/aa  a        /g, 'aa  a        aa  a        ');
// getMatches(/Here we go regular expressions /, 'Here we go regular expressions ');
// getMatches(/1.3/g, '1 3183');
// getMatches(/1\d3/g, '123123123123');
// getMatches(/1\w3/g, '1b2');
getMatches(/a a  a/, 'a a  a');