
var http = require('http')
var concat = require('concat-stream')
var stringArr = []

function printResults(){
    for(var i=0; i<3; i++){
        console.log(results[i])
    }
}

function httpGet(index){
    http.get(process.argv[2 + index], function(response){
        response.pipe(concat(function(err, data){
            if(err){
                return console.error(err)
            }

            results[index] = data.toString()
            count++

            if (count === 3){
                printResults()
            }
        }))
    })
}

for (var i=0; i<3; i++){
    httpGet(i)
}
// // console.log(process.argv[2])
// http.get(process.argv[2], function(response){
//     response.pipe(concat(function (data){
//         console.log(data.toString())
//     }))
// }).on('error', console.error)

// http.get(process.argv[3], function(response){
//     response.pipe(concat(function (data){
//         console.log(data.toString())
//     }))
// }).on('error', console.error)

// http.get(process.argv[4], function(response){
//     response.pipe(concat(function (data){
//         console.log(data.toString())
//     }))
// }).on('error', console.error)
