const express = require('express');
const socket = require('./lib/dgram-socket');
const generateWSRoute = require('./lib/generate-ws-route');

const app = express();

require('express-ws')(app);

const GAME_PORT = process.env.GAME_PORT || 20777;
const PORT = process.env.PORT || 3000;

app.ws('/motion', generateWSRoute('data_motion'));
app.ws('/session', generateWSRoute('data_session'));
app.ws('/laps', generateWSRoute('data_laps'));
app.ws('/race-events', generateWSRoute('data_race_events'));
app.ws('/participants', generateWSRoute('data_participants'));
app.ws('/car-setups', generateWSRoute('data_car_setups'));
app.ws('/car-telemetry', generateWSRoute('data_car_telemetry'));
app.ws('/car-status', generateWSRoute('data_car_status'));
app.ws('/classification', generateWSRoute('data_classification'));
app.ws('/lobby', generateWSRoute('data_lobby'));

app.get('/', function (req, res, next) {
    res.end();
});

socket.bind(GAME_PORT);
app.listen(PORT);
