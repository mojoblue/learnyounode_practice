
// var module = require('./program6_1')
// var folder = process.argv[2]
// var ext = process.argv[3]
// module(folder, ext, function(err, data){
//     if(err)
//         return console.error(err)
//     data.forEach(function(file){
//         console.log(file)
//     })
// })
// // if(fileList != null)
// //     fileList.forEach(function(file){
// //         console.log(file)
// //     })
// // console.log(null)

var filterFn = require('./program6_1.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list){
    if (err){
        return consolr.error('There was an error:', err)
    }
    
    list.forEach(function(file){
        console.log(file)
    })
})