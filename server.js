const http = require('http');

//Declaring a port
const port = 3000;


const requestHandler = (request, response) =>{
    console.log(request.method, request.url)
    response.statusCode = 200;
    
    const name = request.url.slice(1)
    
    const user = {
        "results": [
          {
            "gender": "female",
            "name": {
              "title": "mademoiselle",
              "first": "ruth",
              "last": "nicolas"
            },
            "nat": "CH"
          },
          {
            "gender": "female",
            "name": {
              "title": "miss",
              "first": "رها",
              "last": "سلطانی نژاد"
            },
            "nat": "IR"
          },
          {
            "gender": "female",
            "name": {
              "title": "mrs",
              "first": "patricia",
              "last": "hale"
            },
            "nat": "GB"
          },
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "fernando",
              "last": "cooper"
            },
            "nat": "US"
          },
          {
            "gender": "female",
            "name": {
              "title": "mrs",
              "first": "یسنا",
              "last": "صدر"
            },
            "nat": "IR"
          },
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "eino",
              "last": "tuomala"
            },
            "nat": "FI"
          },
          {
            "gender": "female",
            "name": {
              "title": "ms",
              "first": "gonca",
              "last": "özkara"
            },
            "nat": "TR"
          },
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "kyle",
              "last": "castillo"
            },
            "nat": "US"
          },
          {
            "gender": "female",
            "name": {
              "title": "miss",
              "first": "olivia",
              "last": "kumar"
            },
            "nat": "NZ"
          },
          {
            "gender": "male",
            "name": {
              "title": "monsieur",
              "first": "raymond",
              "last": "durand"
            },
            "nat": "CH"
          }
        ],
        "info": {
          "seed": "2cb086ce097c87ee",
          "results": 10,
          "page": 1,
          "version": "1.2"
        }
      }

    const jsonData = JSON.stringify(user)
    response.setHeader("Content-Type", "application/json")
    response.setHeader("Access-Control-Allow-Origin","*")
    
    
    response.end(jsonData);
    
}
//Declaring a server
const server = http.createServer(requestHandler);


//Running your declared server and attaching it to a port
server.listen(port, () =>{
    console.log(`Server running on http://localhost: ${port}`)
})