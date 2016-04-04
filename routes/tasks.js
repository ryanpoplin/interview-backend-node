'use strict';

import User from '../models/user';
import Task from '../models/task';
import verifyToken from '../libs/verify.token';

module.exports = (app) => {

	app.use((req, res, next) => {
		verifyToken(req, res, next);
	});

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
		const promise = User.findOne({_id: req.decoded.userId});
		promise.then((user) => {
			req.body.userId = req.decoded.userId;
			const task = new Task(req.body);
			const promise = task.save();
			promise.then((task) => {
				user.tasks.push(task);
				user.save();
				res.json({
					task: task,
					created: true
				});
			})
			.catch((err) => {
				res.json({
					error: err,
					message: 'Error creating the task...',
					created: false
				});
			});
		})
		.catch((err) => {
			res.json({
				error: err
			});
		});
	});

	// app.route('/tasks/:id')
	// .get((req, res) => {
	// 	const promise = Task.findOne({_id: req.params.id});
	// 	promise.then((task) => {
	// 		res.json({
	// 			task: task
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		res.json({
	// 			error: err
	// 		});
	// 	});
	// })
	// // TODO: for put and delete, add the decode token module conditionals
	// .put((req, res) => {
	// 	const promise = Task.findByIdAndUpdate(req.params.id, req.body);
	// 	promise.then((task) => {
	// 		res.json({
	// 			task: task,
	// 			updated: true
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		res.json({
	// 			error: err,
	// 			updated: false
	// 		});
	// 	});
	// })
	// .delete((req, res) => {
	// 	const promise = Task.remove({_id: req.params.id});
	// 	promise.then((task) => {
	// 		res.json({
	// 			task: task,
	// 			removed: true
	// 		});
	// 	})
	// 	.catch((task) => {	
	// 		res.json({
	// 			error: err,
	// 			removed: false
	// 		});
	// 	});
	// });

};