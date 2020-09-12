/*
    struct PacketCarStatusData
    {
        PacketHeader    m_header;
        CarStatusData	m_carStatusData[22];
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const carStatusParser = require('../parser/car-status');

const carStatus = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_carStatusData', {
        length: 22,
        type: carStatusParser,
    });

module.exports = carStatus;
