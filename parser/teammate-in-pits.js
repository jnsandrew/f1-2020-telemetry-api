/*
    struct TeamMateInPits
    {
        uint8   vehicleIdx;         // Vehicle index of team mate
    };
*/

const Parser = require('binary-parser').Parser;

const teammateInPits = new Parser().uint8('vehicleIdx');

module.exports = teammateInPits;
