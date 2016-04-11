'use strict';

module.exports = (callback) => {

    const request = require('superagent'),
        dataUrl = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';

    request.get(dataUrl).end((err, res) => {
        (err) ? console.log(err) : require('./config.article')(res.body.zoneContents, (dataFeed) => {
            console.log(JSON.stringify(dataFeed));
            if (callback) {
				callback(dataFeed);
			}
        });
    });

};