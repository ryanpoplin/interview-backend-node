'use strict';

module.exports = function (data) {

    const zoneContainerArr = data;

    zoneContainerArr.forEach(function (zone) {
        for (var key in zone) {
            if (zone.hasOwnProperty(key)) {
                if (zone[key] === 'Top stories') {
                    require('./alter.article')(zone.containerContents);
                }
            }
        }
    });

};