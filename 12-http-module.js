const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Welcome to the about us page');
    }
    console.log('here')
    res.end(`
    <h1>Oops!</h1>
    <p>PageNotFound</p>
    <a href="/">Go back to home</a>
    `);
console.log('end')
    
});

server.listen(5000);


