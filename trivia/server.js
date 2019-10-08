const http = require("http");

const port = 3000;

const requestHandler = (request, response) => {
    response.statusCode = 200;

    const triviaQuestions = require("./trivia.json")

    const jsonData = JSON.stringify(triviaQuestions)

    response.setHeader("Content-Type", "application/json");
    response.setHeader("Access-Control-Allow-Origin", "*");

    response.end(jsonData)
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})