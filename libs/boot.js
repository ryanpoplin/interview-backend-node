'use strict';

// import http from 'http';
const http = require('http');
// import cluster from 'cluster';
// import os from 'os';
// const numCPUs = require('os').cpus().length;

// module.exports = (app) => {

	// if (cluster.isMaster) {
	//   for (var i = 0; i < numCPUs; i++) {
	//     cluster.fork();
	//   }

	//   cluster.on('listening', (worker) => {
	//   	console.log(`${worker.process.pid}`);
	//   });

	//   cluster.on('disconnect', (worker) => {
	//   	console.log(`${worker.process.pid}`);
	//   });

	//   cluster.on('exit', (worker, code, signal) => {
	//     console.log(`${worker.process.pid} died`);
	//   });
	// } else {

	  // or, just use the PM2 module to handle all the clustering for you automatically
	  http.createServer((req, res) => {
	    res.writeHead(200);
	    res.end('hello world\n');
	  }).listen(8000);
	  console.log('Node.js HTTP server initialized!');

	// }

	// // server application 1
	// app.listen(app.get('port'), () => {
	// 	console.log(`NTask API - Port ${app.get('port')}`);
	// 	// require('./es6.classes').greet('boot.js');
	// });
// };