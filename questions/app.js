const http = require("http")
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')

    let obj = [
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What does CPU stand for?",
          "correct_answer": "Central Processing Unit",
          "incorrect_answers": [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What does the &quot;MP&quot; stand for in MP3?",
          "correct_answer": "Moving Picture",
          "incorrect_answers": [
            "Music Player",
            "Multi Pass",
            "Micro Point"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What does GHz stand for?",
          "correct_answer": "Gigahertz",
          "incorrect_answers": [
            "Gigahotz",
            "Gigahetz",
            "Gigahatz"
          ]
        }]
    
    res.end(JSON.stringify(obj))

})
server.listen(port, () => { 
  console.log("server is running on port " + port);
})
