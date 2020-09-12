const event = require('./event-emitter');

const generateWSRoute = eventName => ws => {
    event.on(eventName, function (data) {
        delete data.m_header.m_sessionUID; // TODO: Can't stringify BigINT
        ws.send(JSON.stringify(data));
    });
};

module.exports = generateWSRoute;
