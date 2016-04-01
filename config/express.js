'use strict';

import express from 'express';
import consign from 'consign'; 

module.exports = () => {
    const app = express();
    
    consign()
        .include('models')
        .then('libs/middlewares.js')
        .then('routes')
        .then('libs/boot.js')
        .into(app);
    
    // require('../datafeed/data.feed')(function (dataFeed) {
    //     console.log(JSON.stringify(dataFeed));
    // });
    return app;
};