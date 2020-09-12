/*
    struct PacketLapData
    {
        PacketHeader    m_header;             // Header
        LapData         m_lapData[22];        // Lap data for all cars on track
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const lapDataParser = require('../parser/lap');

const lapData = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_lapData', {
        length: 22,
        type: lapDataParser,
    });

module.exports = lapData;
