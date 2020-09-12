/*
struct ParticipantData
{
    uint8      m_aiControlled;           // Whether the vehicle is AI (1) or Human (0) controlled
    uint8      m_driverId;               // Driver id - see appendix
    uint8      m_teamId;                 // Team id - see appendix
    uint8      m_raceNumber;             // Race number of the car
    uint8      m_nationality;            // Nationality of the driver
    char       m_name[48];               // Name of participant in UTF-8 format – null terminated
                                         // Will be truncated with … (U+2026) if too long
    uint8      m_yourTelemetry;          // The player's UDP setting, 0 = restricted, 1 = public
};
*/

const Parser = require('binary-parser').Parser;

const participantData = new Parser()
    .uint8('m_aiControlled')
    .uint8('m_driverId')
    .uint8('m_teamId')
    .uint8('m_raceNumber')
    .uint8('m_nationality')
    .string('m_name', { length: 48, stripNull: true })
    .uint8('m_yourTelemetry');

module.exports = participantData;
