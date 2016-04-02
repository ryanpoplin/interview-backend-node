'use strict';

import User from '../models/user';

module.exports = (app) => {

	app.route('/users')
	.get((req, res) => {
		const promise = User.find({}).exec();
		promise.then((users) => {
			res.json({
				users: users
			});
		})
		.catch((err) => {
			res.json({
				error: err
			});
		});
	})
	.post((req, res) => {
		const user = new User(req.body);
		const promise = user.save();
		promise.then((user) => {
			res.json({
				user: user,
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

	app.route('/users/:id')
	.get((req, res) => {
		const promise = User.findOne({_id: req.params.id});
		promise.then((user) => {
			res.json({
				user: user
			});
		})
		.catch((err) => {
			res.json({
				error: err
			});
		});
	})
	.put((req, res) => {
		const promise = User.findByIdAndUpdate(req.params.id, req.body);
		promise.then((user) => {
			res.json({
				user: user,
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
		const promise = User.remove({_id: req.params.id});
		promise.then((user) => {
			res.json({
				user: user,
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