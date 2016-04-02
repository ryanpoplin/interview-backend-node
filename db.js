'use strict';

import mongoose from 'mongoose';

module.exports = () => {
	// connect to mongodb
	mongoose.connect('mongodb://localhost:27017/tasks');
};