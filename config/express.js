'use strict';

import express from 'express';
import consign from 'consign';
import Emitter from 'events';

module.exports = () => {
    const app = express(); 

    // 

    const emitter = new Emitter();
    emitter.on('event', () => {
    	console.log('event 1');
    });
    emitter.on('event', () => {
    	console.log('event 2');
    });
    emitter.emit('event');

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