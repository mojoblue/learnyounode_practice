
var http = require('http')
var fs = require('fs')
var port = process.argv[2]

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(res)
}).listen(port)