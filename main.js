'use strict';

// mac bash: set NODE_ENV=development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// get config object for our port based on NODE_ENV setting
const config = require('./config/config');	
// get the configured express application
const express = require('./config/express');
// get our configured express instance
const app = express();

// start the express server and listen on config.port and access applicatoin via config.ip
app.listen(config.port, config.ip); 
// logging to the console for now, do not do this in production
console.log('Server is running at http://' + config.ip + ":" + config.port);