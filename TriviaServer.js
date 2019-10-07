const triviaQuestionsFile = require('./TriviaQuestionsJSON');
const myHttp = require('http');

const data = triviaQuestionsFile.response;


const port = 3107;

const requestHandler = (request, response) => {
    response.statusCode = 200;
    response.setHeader('content-type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*'); 

    const respData = JSON.stringify(data);
    response.end(respData);
}

const server = myHttp.createServer(requestHandler);

server.listen(port, () => {
    console.log('SERVER PORT IS OPEN', port)
});