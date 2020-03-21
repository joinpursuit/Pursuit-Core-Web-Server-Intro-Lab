const http = require("http")
const axios = require("axios")
const port = 3000;

const requestHandle = (request, response) => {
  axios 
  .get("https://randomuser.me/api/?inc=gender,name,nat&&results=10")
  .then(axiosResponse => {
    const jsonData = JSON.stringify(axiosResponse.data);

    response.setHeader("Content-Type", "application/json")
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.end(jsonData);
  }) 
}

const server = http.createServer(requestHandle)

server.listen(port, () => {
    console.log(`server running at http://localhost: ${port}`)
})