const http = require("http")
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')


let obj = [
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
    }
]

if(req.url === "/obj"){
    res.end(JSON.stringify(obj))
}

})
