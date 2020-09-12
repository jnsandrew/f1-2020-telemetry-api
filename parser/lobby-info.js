/*
    struct LobbyInfoData
    {
        uint8     m_aiControlled;            // Whether the vehicle is AI (1) or Human (0) controlled
        uint8     m_teamId;                  // Team id - see appendix (255 if no team currently selected)
        uint8     m_nationality;             // Nationality of the driver
        char      m_name[48];                // Name of participant in UTF-8 format – null terminated
                                            // Will be truncated with ... (U+2026) if too long
        uint8     m_readyStatus;             // 0 = not ready, 1 = ready, 2 = spectating
    };
*/

const Parser = require('binary-parser').Parser;

const carMotion = new Parser()
    .uint8('m_aiControlled')
    .uint8('m_teamId')
    .uint8('m_nationality')
    .string('m_name', { length: 48, stripNull: true })
    .uint8('m_readyStatus');

module.exports = carMotion;
