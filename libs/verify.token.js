'use strict';

import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, '**890890Rr&&rR890890``', (err, decoded) => {
			if (err) {
				res.status(403).send({
					success: false,
					message: 'Failed to authorize token.'
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}
};