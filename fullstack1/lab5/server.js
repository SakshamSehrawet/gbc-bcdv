const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const wallet = require('./ex1/module/wallet')

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
if(req.url === '/deposit'){
    wallet.depositAmount(100);
}
if(req.url === '/address'){
    wallet.getAddress();
}
res.end(req.url + 'request received');

});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
