# F1 2020 Telemetry Parser

This package will listen for telemetry data broadcast over a local network by F1 2020 on all
formats.

### Setup

`npm install` and `npm start`

On F1 2020, enable telemetry from the pause menu and enable broadcast mode.

### Config

Set these environment variables to configure the app.

-   `GAME_PORT` - The port the game is broadcasting to. Default: `20777`
-   `PORT` - The port the app is serving. Default: `3000`
