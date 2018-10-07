
var http = require('http')
var map = require('through2-map')
var port = Number(process.argv[2])

var server = http.createServer((request, response)=>{
    // response.writeHead(200, {'Content-Type' : 'text/plain'})
    if(request.method !== 'POST'){
        return response.end('send me a POST\n')
    }
    
    request.pipe(map((chunk) =>{
        return chunk.toString().split('').join('').toUpperCase()
    })).pipe(response)
    // console.log(response.getHeader)
}).listen(port)