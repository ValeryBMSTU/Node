const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./public/index.html', (err, body) => {
        res.write(body);
        res.end();
    });

    res.write('hello');
});

server.listen(3000);