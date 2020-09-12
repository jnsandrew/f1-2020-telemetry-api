const dgram = require('dgram');
const event = require('./event-emitter');
const header = require('../parser/header');

const carSetupPacket = require('../packets/packet-car-setup');
const carStatusPacket = require('../packets/packet-car-status');
const carTelemetryPacket = require('../packets/packet-car-telemetry');
const eventPacket = require('../packets/packet-event');
const finalClassificationPacket = require('../packets/packet-final-classification');
const lapPacket = require('../packets/packet-lap');
const lobbyPacket = require('../packets/packet-lobby');
const motionPacket = require('../packets/packet-motion');
const participantsPacket = require('../packets/packet-participants');
const sessionPacket = require('../packets/packet-session');

const socket = dgram.createSocket('udp4');

socket.on('message', msg => {
    const { m_packetId } = header.parse(msg);

    switch (m_packetId) {
        case 0:
            event.emit('data_motion', motionPacket.parse(msg));
            break;
        case 1:
            event.emit('data_session', sessionPacket.parse(msg));
            break;
        case 2:
            event.emit('data_laps', lapPacket.parse(msg));
            break;
        case 3:
            event.emit('data_race_events', eventPacket.parse(msg));
            break;
        case 4:
            event.emit('data_participants', participantsPacket.parse(msg));
            break;
        case 5:
            event.emit('data_car_setups', carSetupPacket.parse(msg));
            break;
        case 6:
            event.emit('data_car_telemetry', carTelemetryPacket.parse(msg));
            break;
        case 7:
            event.emit('data_car_status', carStatusPacket.parse(msg));
            break;
        case 8:
            event.emit('data_classification', finalClassificationPacket.parse(msg));
            break;
        case 9:
            event.emit('data_lobby', lobbyPacket.parse(msg));
            break;
    }
});

module.exports = socket;
