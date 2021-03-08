let app = require('./src/server.js');
let port = process.env.PORT || 80;

// Server
app.listen(port, () => {
    console.log(`Listening on: http://3.90.102.121:${port}`);
});
