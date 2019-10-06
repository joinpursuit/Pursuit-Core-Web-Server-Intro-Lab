const http = require('http');

const port = 3000

const server = http.createServer((req, res) => {
    // 1. Response - Status Code

    res.statusCode = 200

    // 2. Response - Headers

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 3. Response - Content with completion

    const json = {
                    'message': 'hello world!'
                 }                    

    res.end(JSON.stringify(json))    
})

server.listen(port, () => {
    console.log("I am listening on port 3000")
})