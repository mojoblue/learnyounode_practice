var fs = require('fs')
var fileSync = fs.readFileSync(process.argv[2])
console.log(fileSync.toString().split("\n").length-1)