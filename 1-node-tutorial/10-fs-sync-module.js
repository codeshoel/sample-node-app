// The sync is recommended if your app is not going to be reading a large file
// beacuse if the program will read large file it'll break, i.e if the program is
// serving a specific user, other users won't be able to use the application due to
// the time consumed at run time.

const {readFileSync, writeFileSync} = require('fs');
console.log('Start')
// read file using readFileSync
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// create/write a new file.

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    // {flag: 'a'} //if this is uncommented it will write to the file and open it.
);

console.log("done with this task");
console.log("starting the next one");

