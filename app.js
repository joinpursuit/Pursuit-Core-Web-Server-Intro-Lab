const http = require("http");
const port =  3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");  
    
  const data = {
      "results": [
        {
          "gender": "female",
          "name": {
            "title": "Mrs",
            "first": "Véronique",
            "last": "Van Oirschot"
          },
          "nat": "NL"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Troy",
            "last": "Stevens"
          },
          "nat": "IE"
        },
        {
          "gender": "female",
          "name": {
            "title": "Ms",
            "first": "Lucie",
            "last": "Nguyen"
          },
          "nat": "FR"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Agnelo",
            "last": "da Costa"
          },
          "nat": "BR"
        },
        {
          "gender": "female",
          "name": {
            "title": "Ms",
            "first": "Sofia",
            "last": "Lo"
          },
          "nat": "CA"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "حسین",
            "last": "رضایی"
          },
          "nat": "IR"
        },
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "تینا",
            "last": "جعفری"
          },
          "nat": "IR"
        },
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "Deniz",
            "last": "Çetin"
          },
          "nat": "TR"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Önal",
            "last": "Numanoğlu"
          },
          "nat": "TR"
        },
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Alfred",
            "last": "Silva"
          },
          "nat": "IE"
        }
      ],
      "info": {
        "seed": "f6d6f992deb41934",
        "results": 10,
        "page": 1,
        "version": "1.3"
      }
  }
  if (req.url === "/data") {
    res.end(JSON.stringify(data));
  } else {
    res.end("Hello World");
  }
})
server.listen(port, () => {
  console.log("Server is running on " + port);
})