const http = require('http')
const axios = require("axios")
const port = 3000;

const requestHandle = (request, response) => {
    axios
    .get("https://opentdb.com/api.php?amount=1&type=multiple")
    .then(axiosResponse => {
        const jsonData = JSON.stringify(axiosResponse.data)

        response.setHeader("Content-Type", "application/json")
        response.setHeader("Access-COntrol-Allow-Origin", "*")

        response.end(jsonData)
    })
}

const server = http.createServer(requestHandle)

server.listen(port, () => {
console.log(port)
})