const http = require("http")
const port = 3000
const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")