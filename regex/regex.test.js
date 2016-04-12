'use strict';

function getMatches (rgx, text) {
	// TODO: implement regexp object cloning logic
	const rgxClone = /a/gi;
	const results = [];
	var match, matchIndex, i = 0;
	while (rgx.exec(text) !== null) {
		match = rgxClone.exec(text);
		matchIndex = match.index;
		if (matchIndex === 0 && i === 0) {
			++i;
			results.push(match);
		} else if (matchIndex === 0 && i !== 0) {
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
const matches = getMatches(/a/gi, 'a a aaaaaaa');
getMatchesCountString(matches);