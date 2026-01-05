const http = require('http');

const app = require('./4-http');

const PORT = 1245;

http.createServer(app).listen(PORT);

console.log(`Server listening on PORT ${PORT}`);
