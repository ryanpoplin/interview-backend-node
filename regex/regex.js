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
// console.log(rgx.exec('hello'));

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