const http = require('http');
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('X-Foo', 'bar');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('ok');
//   }).listen(8080);

const server = http.createServer();

server.on('request', (req, res)=>{
    res.write("Hello Node...\n");
    setTimeout(() => {
        res.write("Still on......\n");
        res.end();
    },1000);
    //res.end();
});

server.listen(8080);