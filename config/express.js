'use strict';

const express = require('express');

module.exports = function () {
    const app = express();

    require('../datafeed/data.feed')();

    return app;
};