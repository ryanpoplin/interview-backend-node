'use strict';

import base64url from 'base64-url';

module.exports = (req) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token'];
	const tokenString = base64url.decode(token);
	const regExp = new RegExp('[a-z0-9]{24}');
	const match = regExp.exec(tokenString);
	return match[0];
};