'use strict';

import express from 'express';
import consign from 'consign';
import mongoose from 'mongoose';

module.exports = () => {
    const app = express();

	mongoose.connect('mongodb://localhost:27017/tasks');
    
    consign()
    	.include('models')
        .then('libs/middlewares.js')
        .then('routes')
        .then('libs/boot.js')
        .into(app);

    console.log(app);
};