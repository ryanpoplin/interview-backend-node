'use strict';

import http from 'http';
import cluster from 'cluster';
import os from 'os';
const numCPUs = require('os').cpus().length;
import fs from 'fs';

module.exports = () => {
	// NOTE: this clustering logic can be removed if you use PM2 daemon module...
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
	    	
	    	//
	    	// require('../regex/rgx')();
			// require('./../datafeed/data.feed')();
			require('./../datafeed/data.feed')(/*function (dataFeed) {
                dataFeed.forEach(function (data) {
                    Object.keys(data).forEach(function(key) {
                        switch (key) {
                            case 'url':

                                break;
                            case 'headline':

                                break;
                            case 'imageUrl':

                                break;
                            case 'byLine':

                                break;
                            default:
                                break;
                        }
                    });
                });
	        }*/);
	    	//

	    	require('./../regex/regex.test');

			res.writeHead(404);
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