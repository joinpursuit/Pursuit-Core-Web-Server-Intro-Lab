const http = require('http');
const port = 3000;
const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  const triviaDatabase = [
    {
      "response_code": 0,
      "results": [
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "HTML is what type of language?",
          "correct_answer": "Markup Language",
          "incorrect_answers": [
            "Macro Language",
            "Programming Language",
            "Scripting Language"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "In web design, what does CSS stand for?",
          "correct_answer": "Cascading Style Sheet",
          "incorrect_answers": [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "In computing terms, typically what does CLI stand for?",
          "correct_answer": "Command Line Interface",
          "incorrect_answers": [
            "Common Language Input",
            "Control Line Interface",
            "Common Language Interface"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What does &quot;LCD&quot; stand for?",
          "correct_answer": "Liquid Crystal Display",
          "incorrect_answers": [
            "Language Control Design",
            "Last Common Difference",
            "Long Continuous Design"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Which operating system was released first?",
          "correct_answer": "Mac OS",
          "incorrect_answers": [
            "Windows",
            "Linux",
            "OS/2"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "hard",
          "question": "What does the International System of Quantities refer 1024 bytes as?",
          "correct_answer": "Kibibyte",
          "incorrect_answers": [
            "Kylobyte",
            "Kilobyte",
            "Kelobyte"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Which programming language was developed by Sun Microsystems in 1995?",
          "correct_answer": "Java",
          "incorrect_answers": [
            "Python",
            "Solaris OS",
            "C++"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "hard",
          "question": "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
          "correct_answer": "Transport",
          "incorrect_answers": [
            "Session",
            "Data link",
            "Network"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "hard",
          "question": "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
          "correct_answer": "Injection ",
          "incorrect_answers": [
            "Broken Authentication",
            "Cross-Site Scripting",
            "Insecure Direct Object References"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What does RAID stand for?",
          "correct_answer": "Redundant Array of Independent Disks",
          "incorrect_answers": [
            "Rapid Access for Indexed Devices",
            "Range of Applications with Identical Designs",
            "Randomized Abstract Identification Description"
          ]
        }
      ]
    }

  ]

  console.log(req.url);
  if(req.url){
    res.end(JSON.stringify(triviaDatabase))
  } else {
    res.end("Error")
  }
});
server.listen(port, () => {
  console.log("server is running on the port " + port)
})