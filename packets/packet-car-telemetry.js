/*
    struct PacketCarTelemetryData
    {
        PacketHeader    	m_header;
        CarTelemetryData    m_carTelemetryData[22];
        uint32              m_buttonStatus;                     // Bit flags specifying which buttons are being pressed
                                                                // currently - see appendices

        uint8               m_mfdPanelIndex;                    // Index of MFD panel open - 255 = MFD closed
                                                                // Single player, race – 0 = Car setup, 1 = Pits
                                                                // 2 = Damage, 3 =  Engine, 4 = Temperatures
                                                                // May vary depending on game mode

        uint8               m_mfdPanelIndexSecondaryPlayer;     // See above
        int8                m_suggestedGear;                    // Suggested gear for the player (1-8)
                                                                // 0 if no gear suggested
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const carTelemetryParser = require('../parser/car-telemetry');

const carTelemetry = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_carTelemetryData', {
        length: 22,
        type: carTelemetryParser,
    })
    .uint32('m_buttonStatus')
    .uint8('m_mfdPanelIndex')
    .uint8('m_mfdPanelIndexSecondaryPlayer')
    .int8('m_suggestedGear');

module.exports = carTelemetry;
