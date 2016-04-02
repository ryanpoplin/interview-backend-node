'use strict';

import mongoose from 'mongoose';

module.exports = () => {
	mongoose.connect('mongodb://localhost:27017/tasks');
};