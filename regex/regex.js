'use strict';

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
