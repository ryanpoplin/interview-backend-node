'use strict';

const _ = require('lodash');

function getMatches (rgx, text) {
	const deep = _.cloneDeep([rgx]),
		rgxClone = deep[0],
		results = [];
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

const matches = getMatches(/^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,7})+$/i, 'https://www.luupy.io');
getMatchesCountString(matches);

const matches2 = getMatches(/aa  a   /, 'aa  a   ');
getMatchesCountString(matches2);

const matches3 = getMatches(/Here we go regular expressions /, 'Here we go regular expressions');
getMatchesCountString(matches3);