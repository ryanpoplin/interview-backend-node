'use strict';

module.exports = (data, callback) => {

    const zoneContainerArr = data;

    zoneContainerArr.forEach((zone) => {
        for (var key in zone) {
            if (zone.hasOwnProperty(key)) {
                if (zone[key] === 'Top stories') {
                    require('./alter.article')(zone.containerContents, (dataFeed) => {
                        callback(dataFeed);
                    });
                }
            }
        }
    });

};