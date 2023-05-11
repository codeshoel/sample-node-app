// cleaner way of blocking event loop


const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to home page');
    }
    if(req.url === '/about'){
        // BLOCKING CODE !!!
        // When we have loop and we us sync matter our program
        // will block other user from interacting the application
        // if there is these one using doing
        // a task that takes time to execute.
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }

        res.end('About page')
    }
    res.end('Error Page')
});
server.listen(5000, () => {
    console.log('Server Listening on port 5000...');
})



// RECOMMENDED WAY OF HANDLING EVENT LOOP BLOCKING
const { readFile, writeFile } = require('fs').promises;
const util = require('util');


// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        
        await writeFile('./content/result-mind-grende.txt', `THIS IS AWESOME: ${first}, ${second}
        `)
        console.log(first, second);
    }catch(error){
        console.log(error);
    }
    
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         });
//     });
// }
// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))













