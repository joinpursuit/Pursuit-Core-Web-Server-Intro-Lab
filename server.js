const http = require("http");
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const randomUser = [
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
        ]
    console.log(req.url)
    //console.log(req)
    if(req.url === "/randomUser"){
        res.end(JSON.stringify(randomUser))
    }
});

server.listen(port, () =>{
    console.log("Server is running on port" + port);
})