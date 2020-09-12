/*
    struct PacketLobbyInfoData
    {
        PacketHeader    m_header;
        uint8               m_numPlayers;               // Number of players in the lobby data
        LobbyInfoData       m_lobbyPlayers[22];
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
    .uint8('m_numPlayers')
    .array('m_lobbyPlayers', {
        length: 22,
        type: carSetupParser,
    });

module.exports = carSetup;
