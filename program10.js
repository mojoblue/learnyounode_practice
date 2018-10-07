var net = require('net')
var portNumber = process.argv[2]
var strftime = require('strftime')
var date = new Date()

// var strftimeIT = strftime.localize()
var timeStr = strftime('%F %R')
var server = net.createServer(function(socket){
    // console.log('client connected')
    
    socket.write(timeStr+"\n")
    socket.end()
    // console.log('client end')
})
server.listen(portNumber)

////////////////////////////////////
// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))