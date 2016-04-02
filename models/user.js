'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new Schema({
	name: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true}
});

UserSchema.pre('save', (next) => {
	const user = this;
	if (!user.isModified('password')) {
		return next();
	} else {
		bcrypt.hash(user.password, null, null, function (err, hash) {
			if (err) {
				return next(err);
			} else {
				user.password = hash;
				next();
			}
		});
	}
});

UserSchema.methods.comparePassword = (password) => {
	const user = this;
	return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);