/*
    struct PacketFinalClassificationData
    {
        PacketHeader    m_header;

        uint8                      m_numCars;
        FinalClassificationData    m_classificationData[22];
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const finalClassificationParser = require('../parser/final-classification');

const carStatus = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_classificationData', {
        length: 22,
        type: finalClassificationParser,
    });

module.exports = carStatus;
