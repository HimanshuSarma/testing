const http = require('http');
const cors = require('cors');

const server = http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
    };

    res.writeHead(200, headers);
    res.end('Hii');
})

const port = 5000;

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})