'use strict';

// export the development or production config based on the process.env.NODE_ENV value
module.exports = require('./env/' + process.env.NODE_ENV + '.js');