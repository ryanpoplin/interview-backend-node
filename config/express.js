'use strict';

import express from 'express';
import consign from 'consign';

module.exports = () => {
    const app = express(); 
    require('../db')();
    consign()
    	.include('models')
        .then('libs/middlewares.js')
        .then('routes')
        .then('libs/boot.js')
        .then('datafeed/data.feed.js')
        .into(app);
};