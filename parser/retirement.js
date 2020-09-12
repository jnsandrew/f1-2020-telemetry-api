/*
    struct Retirement
    {
        uint8   vehicleIdx;         // Vehicle index of car retiring
    };
*/

const Parser = require('binary-parser').Parser;

const retirement = new Parser().uint8('vehicleIdx');

module.exports = retirement;
