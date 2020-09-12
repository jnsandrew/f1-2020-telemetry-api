/*
    struct PacketMotionData
    {
        PacketHeader    m_header;               	// Header

        CarMotionData   m_carMotionData[22];    	// Data for all cars on track

        // Extra player car ONLY data
        float         m_suspensionPosition[4];      // Note: All wheel arrays have the following order:
        float         m_suspensionVelocity[4];      // RL, RR, FL, FR
        float         m_suspensionAcceleration[4];	// RL, RR, FL, FR
        float         m_wheelSpeed[4];           	// Speed of each wheel
        float         m_wheelSlip[4];               // Slip ratio for each wheel
        float         m_localVelocityX;         	// Velocity in local space
        float         m_localVelocityY;         	// Velocity in local space
        float         m_localVelocityZ;         	// Velocity in local space
        float         m_angularVelocityX;		    // Angular velocity x-component
        float         m_angularVelocityY;           // Angular velocity y-component
        float         m_angularVelocityZ;           // Angular velocity z-component
        float         m_angularAccelerationX;       // Angular velocity x-component
        float         m_angularAccelerationY;	    // Angular velocity y-component
        float         m_angularAccelerationZ;       // Angular velocity z-component
        float         m_frontWheelsAngle;           // Current front wheels angle in radians
    };
*/

const Parser = require('binary-parser').Parser;
const headerParser = require('../parser/header');
const carMotionParser = require('../parser/car-motion');

const carMotion = new Parser()
    .endianess('little')
    .nest('m_header', {
        type: headerParser,
    })
    .array('m_carMotionData', {
        length: 22,
        type: carMotionParser,
    })
    .nest('m_extraPlayerData', {
        type: new Parser()
            .endianess('little')
            .array('m_suspensionPosition', {
                length: 4,
                type: new Parser().floatle(''),
            })
            .array('m_suspensionVelocity', {
                length: 4,
                type: new Parser().floatle(''),
            })
            .array('m_suspensionAcceleration', {
                length: 4,
                type: new Parser().floatle(''),
            })
            .array('m_wheelSpeed', {
                length: 4,
                type: new Parser().floatle(''),
            })
            .array('m_wheelSlip', {
                length: 4,
                type: new Parser().floatle(''),
            })
            .floatle('m_localVelocityX')
            .floatle('m_localVelocityY')
            .floatle('m_localVelocityZ')
            .floatle('m_angularVelocityX')
            .floatle('m_angularVelocityY')
            .floatle('m_angularVelocityZ')
            .floatle('m_angularAccelerationX')
            .floatle('m_angularAccelerationY')
            .floatle('m_angularAccelerationZ')
            .floatle('m_frontWheelsAngle'),
    });

module.exports = carMotion;
