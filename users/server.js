// Joseph P. Pasaoa
// INTRO TO SERVERS LAB: RANDOM USER GEN
//

/* MODULE INITS */
const http = require('http');

/* HELPERS */
const log = console.log;



const port = 3010;

const requestHandler = (rq, resp) => {
  log(rq.method, rq.url);

  resp.statusCode = 200;

  const users = {
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

  const jsonData = JSON.stringify(users);

  resp.setHeader("Content-Type", "application/json");
  resp.setHeader("Access-Control-Allow-Origin", "*");

  resp.end(jsonData);
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
  log(`Server running at http://localhost:${port}. Good serving and godspeed.`);
});
