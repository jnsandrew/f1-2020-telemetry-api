/*
    struct SpeedTrap
    {
        uint8 vehicleIdx;           // Vehicle index of the vehicle triggering speed trap
        float speed;                // Top speed achieved in kilometres per hour
    };
*/

const Parser = require('binary-parser').Parser;

const retirement = new Parser().uint8('vehicleIdx').floatle('speed');

module.exports = retirement;
