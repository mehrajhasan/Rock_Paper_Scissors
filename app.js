const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const theUrl = new URL(req.url, `http://localhost:${PORT}`);

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('index.html').pipe(res);
});

const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
