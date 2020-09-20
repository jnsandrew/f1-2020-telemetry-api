const event = require('./event-emitter');

const generateWSRoute = eventName => ws => {
    const sendToClient = data => {
        delete data.m_header.m_sessionUID; // TODO: Can't stringify BigINT
        ws.send(JSON.stringify(data));
    };

    event.on(eventName, sendToClient);

    ws.on('close', () => {
        event.removeListener(eventName, sendToClient);
    });
};

module.exports = generateWSRoute;
