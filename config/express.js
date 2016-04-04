'use strict';

import express from 'express';
import consign from 'consign';
import EventEmitter from 'events';
import util from 'util';

module.exports = () => {
    const app = express(); 

    // 

    console.log(require('../libs/buffer'));

    // 

    require('../db')();
    
    consign()
    	.include('models')
        .then('libs/middlewares.js')
        .then('routes')
        .then('libs/boot.js')
        // .then('datafeed/data.feed.js')
        .into(app);
};