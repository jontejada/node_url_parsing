var http = require('http');
var server = null;

var urltwo = {};

function handleRequest(req, res) {
	urltwo.pathname = req.url;
	res.setHeader("Content-Type", "text/plain");  
 	res.end(urltwo.pathname.split('?')[0]);
}

server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("Listening on PORT 8000...");
});
