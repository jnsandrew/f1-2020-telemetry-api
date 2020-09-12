/*
    struct PacketParticipantsData
    {
        PacketHeader    m_header;           // Header
        uint8           m_numActiveCars;	// Number of active cars in the data – should match number of cars on HUD
        ParticipantData m_participants[22];
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const participantParser = require('../parser/participant');

const carMotion = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .uint8('m_numActiveCars')
    .array('m_participants', {
        length: 22,
        type: participantParser,
    });

module.exports = carMotion;
