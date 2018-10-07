
var http = require('http')
var concat = require('concat-stream')
var stringArr = []
var strLength = 0

// console.log(process.argv[2])
http.get(process.argv[2], function(response){
    response.pipe(concat(function (data){
        stringArr.push(data.toString())

        stringArr.forEach(function (str){
            strLength += str.length
        })
        console.log(strLength)

        stringArr.forEach(function (str){

        console.log(str)
        })
    }))
}).on('error', console.error)