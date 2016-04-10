'use strict';

import http from 'http';
import cluster from 'cluster';
import os from 'os';
const numCPUs = require('os').cpus().length;
import fs from 'fs';

module.exports = () => {
	if (cluster.isMaster) {
	  for (var i = 0; i < numCPUs; i++) {
	    cluster.fork();
	  }

	  cluster.on('listening', (worker) => {
	  	console.log(`${worker.process.pid}`);
	  });

	  cluster.on('disconnect', (worker) => {
	  	console.log(`${worker.process.pid}`);
	  });

	  cluster.on('exit', (worker, code, signal) => {
	    console.log(`${worker.process.pid} died`);
	  });
	} else {
	  http.createServer((req, res) => {
	    
		if (req.url === '/') {
	  		res.writeHead(200, {
	  			'Content-Type': 'text/html',
	  			'Access-Control-Allow-Origin': '*'
	  		});

	  		fs.createReadStream('/Users/byrdannfox/interview-backend-node/templates/test.html').pipe(res);
	  	} else if (req.url === '/api') {
	    	res.writeHead(200, {
		    	'Content-Type': 'application/json',
		    	'Access-Control-Allow-Origin': '*'
	    	});

		  	const jsonObj = {
		  		data: 'data'
		  	};
		  	res.end(JSON.stringify(jsonObj));
	    } else {
			res.writeHead(404);
		    
		    // useful for client-side input, but also interesting regex manipulation based on possible params
			function createRegex (regex) /*String*/ { // use a valid regex like: /l/gi for now
				try {
					if (regex.charAt(0) === '/') { // then we have a possibly valid regex literal syntax
						regex = regex.split('/'); // '/l/gi' for example, it'd equal ['', 'l', 'gi']
						regex.shift(); // since we got rid of the '/'s, shift off the '' at index 0. ['l', 'gi']
						const flags = regex.pop(); // get the last items off array 'regex flags'; set flags to 'gi'
						regex = regex.join(''); // make the array a string without commas
						regex = new RegExp(regex, flags); // create a new RegExp object with the pattern and the flags
						console.log(regex); // log this state
						return regex; // return it to program that requires its value
					} else {
						console.log('The Regular Expression is not valid.');
					}
				} catch (e) {
					console.log('Error');
					return false;
				}
			}

			// function getMatches (regex, text) /*RegEx, String*/ {
			// 	const results = [];
			// 	const result;
			// 	while (result = regex.exec(text) !== null) {
			// 		results.push(result);
			// 	}
			// 	return results;
			// }

			// getMatchesCountString(results) => {
			// 	if (results.length === 1) {
			// 		console.log('There was 1 match...');
			// 	} else {
			// 		console.log(`There are ${results.length} matches...`);
			// 	}
			// }

			// getResultsString(results, text) => {
			// 	const i;
			// 	for (i = results.length - 1; i >= 0; i--) {
			// 		const result = results[i];
			// 		const match = result.toString();
			// 		const prefix = text.substr(0, result.index);
			// 		const suffix = text.substr(result.index + match.length);
			// 		console.log(prefix, match, suffix, text);
			// 	}
			// }

			createRegex(/world/);
			// getMatches(createRegex('/world/', 'What in the world...'));

			// ...

		    res.end();
	    }

	  }).listen(8080, '127.0.0.1');
	  console.log('Node.js HTTP server initialized!');
	}

	// // server application 1
	// app.listen(app.get('port'), () => {
	// 	console.log(`NTask API - Port ${app.get('port')}`);
	// 	// require('./es6.classes').greet('boot.js');
	// });
};