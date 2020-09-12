/*
    struct FastestLap
    {
        uint8	vehicleIdx;         // Vehicle index of car achieving fastest lap
        float	lapTime;            // Lap time is in seconds
    };
*/

const Parser = require('binary-parser').Parser;

const fastestLap = new Parser().uint8('vehicleIdx').floatle('lapTime');

module.exports = fastestLap;
