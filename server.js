var http = require('http');

var server = http.createServer(function (req, resp) {
    // console.log(req);
    resp.writeHead(200, {"Contentn-Type": "text\plain"});
    resp.end("ok");
});


server.listen(8888);

console.log("server is running");
