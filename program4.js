// var fs = require('fs')
// var counter = 0

// function read(path){
//     lines = fs.readFile(path, function doneReading(err, fileContents){
//         counter = fileContents.toString().split('\n').length-1
//         // console.log(fileContents.toString())
//         console.log(counter)
//     })

// }
// read(process.argv[2])

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function(err, contents){
    if(err){
        return console.log(err)
    }
    
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})