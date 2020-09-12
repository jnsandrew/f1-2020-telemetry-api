/*
    union EventDataDetails
    {
        struct FastestLap
        struct Retirement
        struct TeamMateInPits
        struct RaceWinner
        struct Penalty
        struct SpeedTrap
    };

    struct PacketEventData
    {
        PacketHeader    	m_header;
        uint8           	m_eventStringCode[4]; // Event string code, see below
        EventDataDetails	m_eventDetails;       // Event details - should be interpreted differently
                                                  // for each type
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');

const event = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_eventStringCode', {
        length: 4,
        type: new Parser().uint8(),
    });

module.exports = event;
