'use strict';

// // TODO: place these functions in a module

// // useful for client-side input, but also interesting regex manipulation based on possible params
// function createRegex (regex) /*String*/ { // use a valid regex like: /l/gi for now
// 	try {
// 		if (regex.charAt(0) === '/') { // then we have a possibly valid regex literal syntax
// 			regex = regex.split('/'); // '/l/gi' for example, it'd equal ['', 'l', 'gi']
// 			regex.shift(); // since we got rid of the '/'s, shift off the '' at index 0. ['l', 'gi']
// 			const flags = regex.pop(); // get the last items off array 'regex flags'; set flags to 'gi'
// 			regex = regex.join(''); // make the array a string without commas
// 			regex = new RegExp(regex, flags); // create a new RegExp object with the pattern and the flags
// 			console.log(regex);
// 			return regex; // return it to program that requires its value
// 		} else {
// 			console.log('The Regular Expression is not valid.');
// 		}
// 	} catch (e) {
// 		console.log('Error');
// 		return false;
// 	}
// }

// function getMatches (regex, text) /*RegEx, String*/ {
// 	const results = [];
// 	const regexLoopCondition = createRegex(regex.toString());
// 	while (regexLoopCondition.exec(text) !== null) {
// 		results.push(regex.exec(text));
// 	}
// 	console.log(results);
// 	return results;
// }

// function getMatchesCountString (results) {
// 	if (results.length > 0) {
// 		console.log(`There are ${results.length} matches`);
// 	} else {
// 		console.log('There are 0 matches');
// 	}
// }

// const matches = getMatches(createRegex('//'), '');
// getMatchesCountString(matches);

/////////////////////////////////////////////////////

// rgx
// const rgx = /hello/gi; // regex object literal syntax to check 'strings' for patterns
// here we're checking that the string passed into the .test() method of the rxg object 
// will contain 'hello' at some point in general
// console.log(rgx.test('Hello, ... hello I want this string to contain the text: \"hello\"'));

// const rgx = /world/;
// console.log(rgx.exec('world !!!')[0]); // the match containing index...
// console.log(rgx.exec('world !!!')); // index will be 0 because that's where the pattern started...
// console.log(rgx.exec('hello hello world !!!')); // index will be 12 because that's where the pattern started...
// console.log(rgx.exec('hello')); // null

// const str = 'foo foo';
// const newStr = str.replace('foo', 'qux');
// console.log(newStr);

// const str2 = 'foo foo';
// const newStr2 = str2.replace(/foo/gi, 'qux');
// console.log(newStr2);

// const str3 = 'hello world';
// console.log(str3.search(/world/));

// const str4 = 'abcabc';
// console.dir(str4.match(/b/));
// console.dir(str4.match(/b/g));

// /1.3/g = vague matcher = 1 3, 567123
// . = wild card character
// /1\d3/g = digit character = 123, 183, 1888888193
// \w character is the word character, /1\w3/g, 1b3, 183, 1_3
// Negation in regex: /w is opposite of /W for example. /1\w3/g will match 1b3, but /1\W3/g will match 1 3. The opposite of what it normally would
// /[abc]/gi Regex Ranges will find each character in bicycle for example that's an a, b or c character
// /[A-Z][a-z][a-z]/g will match Bun, Run, Ton
// To match hello world and hello-world; use /hello[\- ]world/gi
// match numbers like 123, 4.5, 1.1 and .45 use: /[\d.][\d.]\d/g Also, the [\d.] period in the range is treated as a standard period. Not a wild char
// negation ranges: /[^a-e][f-h]/g '^' everything from abcde will not match and fgh will
// defining multipliers in regex:
// /[A-Z][a-z]+/g, for instance: a match for a name like: Vredesbyrdann Poplin. One or more occurences... 
// Zero or one occurence:
// /apples?/gi will match the following: Apples apple apple. It'll match all three.
// Zero or more occurences multiplier...
// /update!*/g will match the following: update! update!!! update!!!!!!
// custom multipliers: 
// check for a number: 360-1231
// /\d{3}-\d{3}-\d{4}/ matches 543-345-3455
// matching n or more occurences:
// /.{6,}/ matches: asdfgjoioijioj asdfjkl; asdfjkl;asdf jkl;
// matching n to m occurrences
// for instance a maximum and minimum amount of characters for comments:
// /.{15,140}/
// matching alternated options:
// /yes|no/g will match yes or no but can be hack around
// phone number matcher regex for JavaScript:
// /\(?\d{3}\)?-?\d{3}-?\d{4}/ 
// parenthesis are used to define groups in regex
// they are special chars.
// lesson: \(?\d{3}\)?-?\d{3}-?\d{4} always test and break the regex's down @: https://regex101.com/#javascript
// Matching the beginning and end input:
// /^word|word$/gi means that 'word' starts and or ends a string of text or both to get the match status.
// match will occur when a string of text is the only thing to check: /^world$/i
// word boundary matches: /\bcan\b/g matches: Can can candy (will not match can in candy, though)
// matching nonward boundaries:
// /\bcan\B/g will match candy but not can 
// will match something with a whitespace after it: /foo\s/gi
// /\d{1,4}/gi will match '1234'1234 in the 8 character number input
// However, /\d{1,4}?/gi will not be 'greedy', it'll just return the minimum amount of numbers being 1 in this case of 1234
// example of using ungreedy patterns to get what we are looking for more efficiently: /class=".*?"/g
// name pattern: /(\S+) (\S*) ?(\S+)/ the matches: 1. group 1 contains a manditory non-space set like 1234 or asdf. The '+' sign mean it can keep going indefinitly. 2. same thing as 1, however, the * makes it optional to be there as a middle name should be and a space is added. 3. another space is added, but it's optional ' ?'.

