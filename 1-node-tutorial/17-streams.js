// Stream are used for reading and writing file.
// most especiall when a file size incrases immesely

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'});

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err)
})