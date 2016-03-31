'use strict';

const express = require('express');
module.exports = function () {
    const app = express();

    require('../datafeed/data.feed')(function (dataFeed) {
        // console.log(dataFeed);
        return dataFeed;
    });

    return app;
};