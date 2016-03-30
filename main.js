'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/config');	
const express = require('./config/express');
const app = express();

app.listen(config.port, config.ip); 
console.log('Server is running at http://' + config.ip + ":" + config.port);