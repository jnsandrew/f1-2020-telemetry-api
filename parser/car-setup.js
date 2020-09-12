/*
    struct CarSetupData
    {
        uint8     m_frontWing;                // Front wing aero
        uint8     m_rearWing;                 // Rear wing aero
        uint8     m_onThrottle;               // Differential adjustment on throttle (percentage)
        uint8     m_offThrottle;              // Differential adjustment off throttle (percentage)
        float     m_frontCamber;              // Front camber angle (suspension geometry)
        float     m_rearCamber;               // Rear camber angle (suspension geometry)
        float     m_frontToe;                 // Front toe angle (suspension geometry)
        float     m_rearToe;                  // Rear toe angle (suspension geometry)
        uint8     m_frontSuspension;          // Front suspension
        uint8     m_rearSuspension;           // Rear suspension
        uint8     m_frontAntiRollBar;         // Front anti-roll bar
        uint8     m_rearAntiRollBar;          // Front anti-roll bar
        uint8     m_frontSuspensionHeight;    // Front ride height
        uint8     m_rearSuspensionHeight;     // Rear ride height
        uint8     m_brakePressure;            // Brake pressure (percentage)
        uint8     m_brakeBias;                // Brake bias (percentage)
        float     m_rearLeftTyrePressure;     // Rear left tyre pressure (PSI)
        float     m_rearRightTyrePressure;    // Rear right tyre pressure (PSI)
        float     m_frontLeftTyrePressure;    // Front left tyre pressure (PSI)
        float     m_frontRightTyrePressure;   // Front right tyre pressure (PSI)
        uint8     m_ballast;                  // Ballast
        float     m_fuelLoad;                 // Fuel load
    };
*/

const Parser = require('binary-parser').Parser;

const carSetup = new Parser()
    .uint8('m_frontWing')
    .uint8('m_rearWing')
    .uint8('m_onThrottle')
    .uint8('m_offThrottle')
    .floatle('m_frontCamber')
    .floatle('m_rearCamber')
    .floatle('m_frontToe')
    .floatle('m_rearToe')
    .uint8('m_frontSuspension')
    .uint8('m_rearSuspension')
    .uint8('m_frontAntiRollBar')
    .uint8('m_rearAntiRollBar')
    .uint8('m_frontSuspensionHeight')
    .uint8('m_rearSuspensionHeight')
    .uint8('m_brakePressure')
    .uint8('m_brakeBias')
    .floatle('m_rearLeftTyrePressure')
    .floatle('m_rearRightTyrePressure')
    .floatle('m_frontLeftTyrePressure')
    .floatle('m_frontRightTyrePressure')
    .uint8('m_ballast')
    .floatle('m_fuelLoad');

module.exports = carSetup;
