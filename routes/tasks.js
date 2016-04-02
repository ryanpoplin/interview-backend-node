'use strict';

import Task from '../models/task';

module.exports = (app) => {

	// TODO: move logic inside each function into its own module
	app.route('/tasks')
	.all((req, res, next) => {
		console.log('/tasks route');
		console.log(req.body);
		next();
	})
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
		console.log(req.body);
		const task = new Task(req.body);
		const promise = task.save();
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
	});

	app.route('/tasks/:id')
	.all((req, res, next) => {
		console.log('/tasks/:id route');
		next();
	})
	// list a single task
	.get((req, res) => {

	})
	// update a single task
	.put((req, res) => {

	})
	// delete a single task
	.delete((req, res) => {

	});

}; 