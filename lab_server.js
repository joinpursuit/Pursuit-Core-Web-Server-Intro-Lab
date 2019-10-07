const http = require("http");

const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.method, request.url)

    response.statusCode = 200;

    let user = "https://randomuser.me/api/?inc=gender,name,nat&&results=10"
     
    const jsonData = JSON.stringify(user);
    console.log(user)

    response.setHeader("content-Type","application/json")
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.end(jsonData)
}
const server = http.createServer()

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
