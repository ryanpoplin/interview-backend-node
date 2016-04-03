'use strict';

import jwt from 'jsonwebtoken';
import User from '../models/user';

module.exports = (req, res, email, password) => {
	User.findOne({
		email: email
	}).select('name password email').exec((err, user) => {
		if (err) {
			throw err
		} else if (!user) {
			res.json({
				success: false,
				message: 'Authentication failed. User not found.'
			});
		} else if (user) {
			const validPassword = user.comparePassword(password);
			if (!validPassword) {
				res.json({
					success: false,
					message: 'Authentication failed. Wrong password.'
				});
			} else {
				const token = jwt.sign({
					email: user.email,
					userId: user._id
				}, '**890890Rr&&rR890890``', {
					expiresIn: 31536000
				});
				res.json({
					success: true,
					message: 'User created, auth token created',
					token: token
				});
			}
		}	
	});
};