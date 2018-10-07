var argLen = process.argv.length;
var count = 2;
var sum = 0;
while(count < argLen){
    sum += Number(process.argv[count]);
    count++;
}

console.log(sum);
