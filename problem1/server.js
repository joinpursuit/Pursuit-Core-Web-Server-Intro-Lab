const http = require("http");
const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.method, request.url);
    response.statusCode = 200;
    response.setHeader('content-type', 'application/json'); //sets up metadata about the thing
    response.setHeader('Access-Control-Allow-Origin', "*"); //sets up metadata about the thing

const users = {
    results: [
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Paul",
              "last": "Ross"
          },
          "nat": "US"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Gard",
              "last": "Lundal"
          },
          "nat": "NO"
      },
      {
          "gender": "female",
          "name": {
              "title": "Ms",
              "first": "Lillie",
              "last": "Kim"
          },
          "nat": "AU"
      },
      {
          "gender": "female",
          "name": {
              "title": "Mrs",
              "first": "Emilia",
              "last": "Sørbø"
          },
          "nat": "NO"
      },
      {
          "gender": "female",
          "name": {
              "title": "Ms",
              "first": "Emilie",
              "last": "Williams"
          },
          "nat": "CA"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Clemens",
              "last": "Ernst"
          },
          "nat": "DE"
      },
      {
          "gender": "female",
          "name": {
              "title": "Mrs",
              "first": "Olga",
              "last": "Jimenez"
          },
          "nat": "ES"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Eckart",
              "last": "Manthey"
          },
          "nat": "DE"
      },
      {
          "gender": "female",
          "name": {
              "title": "Miss",
              "first": "Mercedes",
              "last": "Sanz"
          },
          "nat": "ES"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Darryl",
              "last": "Hansen"
          },
          "nat": "GB"
      }
  ],
  "info": {
      "seed": "7e60c594b0afb65a",
      "results": 10,
      "page": 1,
      "version": "1.3"
  }
}

const jsonData = JSON.stringify(users);
response.end(jsonData);
}
const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log("server running at https://localhost:" + `${port}`);
});