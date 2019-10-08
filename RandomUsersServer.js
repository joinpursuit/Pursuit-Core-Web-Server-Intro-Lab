const randomUsersFile = require('./RandomUsersJSON');
const myHttp = require('http');

const port = 2702;

const requestHandler = (request, response) => {
    response.statusCode = 200;
    response.setHeader('content-type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*'); 

    let data = randomUsersFile.getTenRandomElement();
    const respData = JSON.stringify(data);
    
    response.end(respData);
}

const server = myHttp.createServer(requestHandler);

server.listen(port, () => {
    console.log('SERVER PORT IS OPEN', port)
});