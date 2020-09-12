/*
    struct RaceWinner
    {
        uint8   vehicleIdx;         // Vehicle index of the race winner
    };
*/

const Parser = require('binary-parser').Parser;

const raceWinner = new Parser().uint8('vehicleIdx');

module.exports = raceWinner;
