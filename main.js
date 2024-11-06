const http = require('http');
const port = 3000;
const fs = require('fs');

const renderPage = (path , response) => {
    fs.readFile(path , (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Error: Could not read file');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        }
    })
}

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/contact') {
        renderPage('./contact.html' , res);
    } else if (url === '/about') {
        renderPage('./index.html' , res);
    } else if (url === '/') {
       renderPage('./main.html' , res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Not Found</h1>");
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
