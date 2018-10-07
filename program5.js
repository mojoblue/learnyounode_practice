// var fs = require('fs')
// var path = require('path')


// fs.readdir(process.argv[2], function(err, contents){
//     if(err){
//         return console.log(err)
//     }
//     var lists = contents
//     for(var i=0; i<lists.length; i++){
//         var ext = path.parse(lists[i]).ext.toString()
//         if(ext == "."+process.argv[3]){
//             console.log(lists[i])
//         }
//     }
// })

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
        files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})