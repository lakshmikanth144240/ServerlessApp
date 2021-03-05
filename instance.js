let app = require('./src/server.js');
let port = process.env.PORT || 80;

// Server
app.listen(port, () => {
    console.log(`Listening on: http://34.233.125.82:${port}`);
});
