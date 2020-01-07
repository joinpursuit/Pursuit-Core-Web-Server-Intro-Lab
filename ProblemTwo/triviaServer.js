const http = require ("http")
const port = 4001

const requestHandler = (request,response) => {
    response.statusCode = 200
    response.setHeader("Content-Type", "Application/JSON")
    response.setHeader("Access-Control-Allow-Origin", "*")

    const trivia = require("./trivia.json")
    const json = JSON.stringify(trivia)
    response.end(json)
}

const server = http.createServer(requestHandler)

server.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})
    
