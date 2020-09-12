/*
    struct PacketCarSetupData
    {
        PacketHeader    m_header;
        CarSetupData    m_carSetups[22];
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const carSetupParser = require('../parser/car-setup');

const carSetup = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_carSetups', {
        length: 22,
        type: carSetupParser,
    });

module.exports = carSetup;
