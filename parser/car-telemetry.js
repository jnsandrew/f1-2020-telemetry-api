/*
    struct CarTelemetryData 
    {
        uint16    m_speed;                         // Speed of car in kilometres per hour
        float     m_throttle;                      // Amount of throttle applied (0.0 to 1.0)
        float     m_steer;                         // Steering (-1.0 (full lock left) to 1.0 (full lock right))
        float     m_brake;                         // Amount of brake applied (0.0 to 1.0)
        uint8     m_clutch;                        // Amount of clutch applied (0 to 100)
        int8      m_gear;                          // Gear selected (1-8, N=0, R=-1)
        uint16    m_engineRPM;                     // Engine RPM
        uint8     m_drs;                           // 0 = off, 1 = on
        uint8     m_revLightsPercent;              // Rev lights indicator (percentage)
        uint16    m_brakesTemperature[4];          // Brakes temperature (celsius)
        uint8     m_tyresSurfaceTemperature[4];    // Tyres surface temperature (celsius)
        uint8     m_tyresInnerTemperature[4];      // Tyres inner temperature (celsius)
        uint16    m_engineTemperature;             // Engine temperature (celsius)
        float     m_tyresPressure[4];              // Tyres pressure (PSI)
        uint8     m_surfaceType[4];                // Driving surface, see appendices
    };
*/

const Parser = require('binary-parser').Parser;

const carTelemetry = new Parser()
    .uint16('m_speed')
    .floatle('m_throttle')
    .floatle('m_steer')
    .floatle('m_brake')
    .uint8('m_clutch')
    .int8('m_gear')
    .uint16('m_engineRPM')
    .uint8('m_drs')
    .uint8('m_revLightsPercent')
    .array('m_brakesTemperature', {
        length: 4,
        type: new Parser().uint16(''),
    })
    .array('m_tyresSurfaceTemperature', {
        length: 4,
        type: new Parser().uint8(''),
    })
    .array('m_tyresInnerTemperature', {
        length: 4,
        type: new Parser().uint8(''),
    })
    .uint16('m_engineTemperature')
    .array('m_tyresPressure', {
        length: 4,
        type: new Parser().floatle(''),
    })
    .array('m_surfaceType', {
        length: 4,
        type: new Parser().uint8('m_surfaceType'),
    });

module.exports = carTelemetry;
