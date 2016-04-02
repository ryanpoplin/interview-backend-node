'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	title: {type: String, required: true},
	done: {type: Boolean, requied: true}
});

module.exports = mongoose.model('Task', TaskSchema);