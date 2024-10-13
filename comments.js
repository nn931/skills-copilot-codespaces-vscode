// Create web server

// Require the http module
var http = require('http');

// Create a web server and pass a function that takes a request and response object
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

// Listen on port 3000
server.listen(3000, '
