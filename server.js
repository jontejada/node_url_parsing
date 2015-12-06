var http = require('http');
var url = require('url');
var server = null;

var urltwo = {};

function handleRequest(req, res) {
	// urltwo.pathname = req.url.split('?')[0];
	// urltwo.query = {};
	// var splitQuery = req.url.split('?')[1].split('&');
	// for (var i=0; i<splitQuery.length; i++) {
	// 	urltwo.query[splitQuery[i].split('=')[0]] = decodeURI( splitQuery[i].split('=')[1] );
	// }
	// res.setHeader("Content-Type", "text/html");  
 // 	res.end('<h1 style="font-family:sans-serif">' + JSON.stringify(urltwo.query) + '</h1>');
 // 	console.log(urltwo);

 	urltwo = url.parse(req.url, true);
 	res.setHeader("Content-Type", "text/html"); 
 	res.end('<h1 style="font-family:sans-serif">' + JSON.stringify(urltwo.query) + '</h1>');
 	console.log(urltwo);

}

server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("Listening on PORT 8000...");
});
