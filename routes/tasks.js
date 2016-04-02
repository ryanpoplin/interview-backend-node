'use strict';

import Task from '../models/task';

module.exports = (app) => {

	app.route('/tasks')
	.get((req, res) => {
		const promise = Task.find({}).exec();
		promise.then((tasks) => {
			res.json({
				tasks: tasks
			});
		})
		.catch((err) => {
			res.json({
				error: err
			});
		});
	})
	.post((req, res) => {
		const task = new Task(req.body);
		const promise = task.save();
		promise.then((task) => {
			res.json({
				task: task,
				created: true
			});
		})
		.catch((err) => {
			res.json({
				error: err,
				created: false
			});
		});
	});

	app.route('/tasks/:id')
	.get((req, res) => {
		const promise = Task.findOne({_id: req.params.id});
		promise.then((task) => {
			res.json({
				task: task
			});
		})
		.catch((err) => {
			res.json({
				error: err
			});
		});
	})
	.put((req, res) => {
		const promise = Task.findByIdAndUpdate(req.params.id, req.body);
		promise.then((task) => {
			res.json({
				task: task,
				updated: true
			});
		})
		.catch((err) => {
			res.json({
				error: err,
				updated: false
			});
		});
	})
	.delete((req, res) => {
		const promise = Task.remove({_id: req.params.id});
		promise.then((task) => {
			res.json({
				task: task,
				removed: true
			});
		})
		.catch((task) => {	
			res.json({
				error: err,
				removed: false
			});
		});
	});

};