'use strict';

import express from 'express';

module.exports = function () {
    const app = express();

    // TODO: move routes into a routes file within a routes directory
    app.get('/', (req, res) =>
    res.json({status: 'NTask API'}));

    // require('../datafeed/data.feed')(function (dataFeed) {
    //     console.log(JSON.stringify(dataFeed));
    // });

    return app;
};