
// nodejs event loop help us offload request that are not time consuming
// before running time consuming request.

const { readFile } = require('fs')

console.log('started a first task')

// CHECK FILE PATH
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        retun
    }
    console.log(result)
    console.log('completed first task')
});
console.log('starting next task');

// Example Two
// Using timeout senario
// started operating system
console.log('first task')
setTimeout(()=>{
    console.log('second task')
}, 0);
console.log('third task')
// completed and exited operating system process

// Example Three
setInterval(()=>{
console.log('hello world')
}, 2000);
console.log('I will run first')
// process stays alive unless
// kill process CONTROL +C
// unexpected error.


// Example Four 
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello world');
});
server.listen(5000, () => {
    console.log('Server listening on port: 5000...')
});


