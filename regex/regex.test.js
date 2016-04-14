'use strict';

function getMatchData (rgx, text) {
	const _ = require('lodash'),
		deep = _.cloneDeep([rgx]),
		rgxClone = deep[0],
		results = [],
		resultsContainer = {};
	var match, 
		i;

	while (rgx.exec(text) !== null) {
		match = rgxClone.exec(text);
		if (i === undefined) {
			i = match.index;
			results.push(match);
		} else if (match.index > i) {
			i = match.index;
			results.push(match);	
		} else if (match.index === i) {
			break;
		}
	}
	resultsContainer.results = results;

	switch (results.length) {
		case 0:
			resultsContainer.matchInfo = 'There are 0 matches';
			break;
		case 1:
			resultsContainer.matchInfo = 'There is 1 match.';	
			break;
		default:
			resultsContainer.matchInfo = `There are ${results.length} matches`;
			break;
	}

	console.log(resultsContainer);
	return resultsContainer;
}

getMatchData(/a a  a/gi, 'a a  aa a  AA A  a');
// getMatches(/^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,7})+$/i, 'https://www.luupy.io');
// getMatches(/aa  a        /g, 'aa  a        aa  a        ');
// getMatches(/Here we go regular expressions /, 'Here we go regular expressions ');
// getMatches(/1.3/g, '1 3183');
// getMatches(/1\d3/g, '123123123123');
// getMatches(/1\w3/g, '1b2');