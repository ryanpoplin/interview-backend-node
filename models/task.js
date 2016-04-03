'use strict';

import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	title: {type: String, required: true},
	done: {type: Boolean, required: true},
	userId: {type: String, required: true}
});

module.exports = mongoose.model('Task', TaskSchema);