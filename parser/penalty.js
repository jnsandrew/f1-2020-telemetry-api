/*
    struct Penalty
    {
        uint8 penaltyType;          // Penalty type – see Appendices
        uint8 infringementType;     // Infringement type – see Appendices
        uint8 vehicleIdx;           // Vehicle index of the car the penalty is applied to
        uint8 otherVehicleIdx;      // Vehicle index of the other car involved
        uint8 time;                 // Time gained, or time spent doing action in seconds
        uint8 lapNum;               // Lap the penalty occurred on
        uint8 placesGained;         // Number of places gained by this
    };
*/

const Parser = require('binary-parser').Parser;

const penalty = new Parser()
    .uint8('penaltyType')
    .uint8('infringementType')
    .uint8('vehicleIdx')
    .uint8('otherVehicleIdx')
    .uint8('time')
    .uint8('lapNum')
    .uint8('placesGained');

module.exports = penalty;
