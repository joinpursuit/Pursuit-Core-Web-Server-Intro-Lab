const http = require ("http")

const port = 3000
const server = http.createServer((req,res)=>{
   
    res.statusCode = 200;
    res.setHeader('Content-Type', ' application/json')
    res.setHeader("Access-Control-Allow-Origin","*" )

const questions = [
    {
        "question": "What team does Lebron James plays for?",
        "correct_answer": "LA Lakers",
        "incorrect_answers": [
          "Cleveland Cavaliers",
          "NY Knicks",
          "LA Clippers"
        ]
    },
    {
        "question": "Which female group was Beyonce apart of?",
        "correct_answer": "Destiny Child",
        "incorrect_answers": [
          "DC3",
          "TLC",
          "Total"
        ]
    },
    {
        "question": "What college football team did Dwayne The Rock Johnson play for?",
        "correct_answer": "Miami university",
        "incorrect_answers": [
          "Ohio State",
          "Penn State ",
          "Norte Dame"
        ]
    },
    {
        "question": "What year did Oprah retire from Tv Hosting?",
        "correct_answer": "2011",
        "incorrect_answers": [
          "2000",
          "2020",
          "2015"
        ]
    },
    {
        "question": "What is Ellen DeGenres wife name?",
        "correct_answer": "Portia de Rossi",
        "incorrect_answers": [
          "Anne Heche",
          "Mel Metcalfe",
          "Cynthia Nixon"
        ]
    },
    {
        "question": "Which is NOT a Tyler Swift song?",
        "correct_answer": "We belong together",
        "incorrect_answers": [
          "You belong with me",
          "Shake it off",
          "You need to calm down"
        ]
    }
]

if(req.url === "/question"){
    res.end(JSON.stringify(questions))
} else {
    res.end("Welcome to Brooklyn!!!")
}

})

server.listen(port,() => {
    console.log("Server is running  port " + port)
})
