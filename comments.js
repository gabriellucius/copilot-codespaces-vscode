// Create web server and listen on port 3000
// Load the comments module and use it to handle incoming requests
var http = require('http');
var comments = require('./comments');

var server = new http.Server();
server.listen(3000);

server.on('request', function(req, res) {
  if (req.url === '/comments' && req.method === 'POST') {
    comments.add(req, res);
  } else if (req.url === '/comments' && req.method === 'GET') {
    comments.get(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});