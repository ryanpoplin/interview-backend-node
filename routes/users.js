'use strict';

import User from '../models/user';
import jwt from 'jsonwebtoken';
import createToken from '../libs/token';
import decodeToken from '../libs/decode.token';

module.exports = (app) => {

	app.route('/users/signup')
	.post((req, res) => {
		const user = new User(req.body);
		const promise = user.save();
		promise.then((user) => {
			createToken(req, res, req.body.email, req.body.password);
		})
		.catch((err) => {
			console.log(err);
			console.log(err.code === 11000);
		});
	});

	app.route('users/signin')
	.post((req, res) => {
		if (req.body.email && req.body.password) {
			createToken(req, res, req.body.email, req.body.password);
		} else {	
			res.json({
				error: 'You must provide a valid email and password to login to your account. If you do not have an account, you must create one.'
			});
		}
	});

	app.route('/users')
	.all((req, res, next) => {
		const token = req.body.token || req.query.token || req.headers['x-access-token'];
		if (token) {
			jwt.verify(token, '**890890Rr&&rR890890``', function(err, decoded) {
				if (err) {
					return res.status(403).send({
						success: false,
						message: 'Failed to authorize token.'
					});
				} else {
					req.decoded = decoded;
					next();
				}
			});
		} else {
			return res.status(403).send({
				success: false,
				message: 'No token provided.'
			});
		}
	})
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
		if (decodeToken(req) === req.params.id || decodeToken(req) === req.body.id) {
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
		} else {
			res.json({
				error: 'You cannot edit another users\' data.'
			});
		}
	})
	.delete((req, res) => {
		if (decodeToken(req) === req.params.id || decodeToken(req) === req.body.id) {
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
		} else {
			res.json({
				error: 'You cannot delete another users\' data'
			});
		}
	});

};