const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const people = 
       { "results" :[
          {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "Carl",
              "last": "Olsen"
            },
            "nat": "DK"
          },
          {
            "gender": "female",
            "name": {
              "title": "Ms",
              "first": "Ava",
              "last": "Anderson"
            },
            "nat": "CA"
          },
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Erin",
              "last": "Hicks"
            },
            "nat": "IE"
          },
          {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "Thibaut",
              "last": "Marie"
            },
            "nat": "FR"
          },
        
        ]
    }
      console.log(req.url)
      if(req.url === "/people"){
          res.end(JSON.stringify(people))
      }else{
          res.end("Hello World")
      }
})

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})