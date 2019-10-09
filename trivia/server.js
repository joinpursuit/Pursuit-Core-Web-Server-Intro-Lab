// Joseph P. Pasaoa
// INTRO TO SERVERS LAB: TRIVIA QUESTIONS
//

/* MODULE INITS */
const http = require('http');

/* HELPERS */
const log = console.log;



const port = 3020;

const genRandomNum = (max) => { // Min: 0 incl, Max: incl
  return Math.floor(Math.random() * max);
}

let noDupesObj = {};

const requestHandler = (req, res) => {
  log(req.method, req.url);

  if (req.url === "/") {
    res.statusCode = 200;

    const questions = [
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
          "question": "What does 'LCD' stand for?",
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
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
          "correct_answer": "Apple",
          "incorrect_answers": [
            "Microsoft",
            "Atari",
            "Commodore"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
          "correct_answer": "Year",
          "incorrect_answers": [
            "Four Years",
            "Two Years",
            "Eight Years"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Nvidia's headquarters are based in which Silicon Valley city?",
          "correct_answer": "Santa Clara",
          "incorrect_answers": [
            "Palo Alto",
            "Cupertino",
            "Mountain View"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What was the first commerically available computer processor?",
          "correct_answer": "Intel 4004",
          "incorrect_answers": [
            "Intel 486SX",
            "TMS 1000",
            "AMD AM386"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What was the name given to Android 4.3?",
          "correct_answer": "Jelly Bean",
          "incorrect_answers": [
            "Lollipop",
            "Nutella",
            "Froyo"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "In 'Hexadecimal', what color would be displayed from the color code? '#00FF00'?",
          "correct_answer": "Green",
          "incorrect_answers": [
            "Red",
            "Blue",
            "Yellow"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "hard",
          "question": "Which of these is not a key value of Agile software development?",
          "correct_answer": "Comprehensive documentation",
          "incorrect_answers": [
            "Individuals and interactions",
            "Customer collaboration",
            "Responding to change"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "The C programming language was created by this American computer scientist. ",
          "correct_answer": "Dennis Ritchie",
          "incorrect_answers": [
            "Tim Berners Lee",
            "al-Khwārizmī",
            "Willis Ware"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "In programming, what do you call functions with the same name but different implementations?",
          "correct_answer": "Overloading",
          "incorrect_answers": [
            "Overriding",
            "Abstracting",
            "Inheriting"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "In computing, what does MIDI stand for?",
          "correct_answer": "Musical Instrument Digital Interface",
          "incorrect_answers": [
            "Musical Interface of Digital Instruments",
            "Modular Interface of Digital Instruments",
            "Musical Instrument Data Interface"
          ]
        },
        {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Whistler was the codename of this Microsoft Operating System.",
          "correct_answer": "Windows XP",
          "incorrect_answers": [
            "Windows 2000",
            "Windows 7",
            "Windows 95"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What amount of bits commonly equals one byte?",
          "correct_answer": "8",
          "incorrect_answers": [
            "1",
            "2",
            "64"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
          "correct_answer": "Final",
          "incorrect_answers": [
            "Static",
            "Private",
            "Public"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What is the most preferred image format used for logos in the Wikimedia database?",
          "correct_answer": ".svg",
          "incorrect_answers": [
            ".png",
            ".jpeg",
            ".gif"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "While Apple was formed in California, in which western state was Microsoft founded?",
          "correct_answer": "New Mexico",
          "incorrect_answers": [
            "Washington",
            "Colorado",
            "Arizona"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "hard",
          "question": "Which data structure does FILO apply to?",
          "correct_answer": "Stack",
          "incorrect_answers": [
            "Queue",
            "Heap",
            "Tree"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What was the first Android version specifically optimized for tablets?",
          "correct_answer": "Honeycomb",
          "incorrect_answers": [
            "Eclair",
            "Froyo",
            "Marshmellow"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What does the term MIME stand for, in regards to computing?",
          "correct_answer": "Multipurpose Internet Mail Extensions",
          "incorrect_answers": [
            "Mail Internet Mail Exchange",
            "Multipurpose Interleave Mail Exchange",
            "Mail Interleave Method Exchange"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "medium",
          "question": "In programming, what do you call functions with the same name but different implementations?",
          "correct_answer": "Overloading",
          "incorrect_answers": [
            "Overriding",
            "Abstracting",
            "Inheriting"
          ]
          },
          {
          "category": "Science: Computers",
          "type": "multiple",
          "difficulty": "easy",
          "question": "In computing, what does MIDI stand for?",
          "correct_answer": "Musical Instrument Digital Interface",
          "incorrect_answers": [
            "Musical Interface of Digital Instruments",
            "Modular Interface of Digital Instruments",
            "Musical Instrument Data Interface"
          ]
          }
      ];
    let reqOutput = {
      response_code: 0,
      results: []
    };
    while (reqOutput.results.length < 10) {
      if (Object.keys(noDupesObj).length > questions.length - 10) {
        noDupesObj = {};
      } else if (Object.keys(noDupesObj).length === questions.length - 10) {
        for (let i = 0; i < questions.length; i++) {
          if (!noDupesObj[i]) {
            reqOutput.results.push(questions[i]);
            noDupesObj[i] = true;
          }
        }
        noDupesObj = {};
      } else {
        let qIndex = genRandomNum(questions.length - 1);
        if (!noDupesObj[qIndex]) {
          reqOutput.results.push(questions[qIndex]);
          noDupesObj[qIndex] = true;
        }
      }
    }

    const jsonData = JSON.stringify(reqOutput);

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.end(jsonData);
  }
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
  log(`Server running at http://localhost:${port}. Carpe diem.`);
});