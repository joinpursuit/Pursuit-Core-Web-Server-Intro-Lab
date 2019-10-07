document.addEventListener('DOMContentLoaded', () =>{
    fillSelectTag();

    let thisForm = document.querySelector('#form')

    thisForm.addEventListener('submit', (event) => {
        event.preventDefault();
        checkAnswer();
    })
    // loadDataFromServer();
    // getServerButton().addEventListener('click', checkAnswer)
})

async function fillSelectTag () {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

function getServerButton() {
    return document.querySelector("#submit-answer")
}

function checkAnswer () {
let userAnswer = document.querySelector("#correctAnswer").value
        if (document.querySelector('#possAnswers').value === userAnswer){
            console.log('Got it');
            let rightResponse = document.createElement("p");
            document.body.appendChild(rightResponse);
        } else {
            console.log('Wrong Answer')
            let wrongResponse = document.createElement("p");
            document.body.appendChild(wrongResponse);

        }
}
// async function loadDataFromServer() {
//     const myURL = "http://localhost:3000/"
//     const resp = await axios.get(myURL)    
//     displayDataFromServer(resp.data)
// }

function displayDataFromServer(data) {
    let randomNum = Math.floor(Math.random() * data.results.length);
    console.log(data.results[randomNum].question)

    
    let currQuestion = document.querySelector('#currentQuestion');

    currQuestion.innerText = data.results[randomNum].question


    for(let i = 0; i < data.results.length; i++) {
        // console.log(data.results[i].question)
        if(data.results[randomNum].question === data.results[i].question) {
            let questionSelection = document.querySelector('#possAnswers');
            let guessAnswer1 = document.createElement("option");
            let guessAnswer2 = document.createElement("option");
            let guessAnswer3 = document.createElement("option");
            let guessAnswer4 = document.createElement("option");

            guessAnswer4.id = 'correctAnswer';
    
            guessAnswer1.innerText = data.results[i].incorrect_answers[0];
            guessAnswer2.innerText = data.results[i].incorrect_answers[1];
            guessAnswer3.innerText = data.results[i].incorrect_answers[2];
            guessAnswer4.innerText = data.results[i].correct_answer;

            let randomArrange = Math.floor(Math.random() * 4);

            if(randomArrange === 0) {
                questionSelection.appendChild(guessAnswer1);
                questionSelection.appendChild(guessAnswer4);
                questionSelection.appendChild(guessAnswer2);
                questionSelection.appendChild(guessAnswer3);
            } else if(randomArrange === 1){
                questionSelection.appendChild(guessAnswer3);
                questionSelection.appendChild(guessAnswer4);
                questionSelection.appendChild(guessAnswer2);
                questionSelection.appendChild(guessAnswer1);
            } else if(randomArrange === 2){
                questionSelection.appendChild(guessAnswer2);
                questionSelection.appendChild(guessAnswer4);
                questionSelection.appendChild(guessAnswer3);
                questionSelection.appendChild(guessAnswer1);
            } else if(randomArrange === 3){
                questionSelection.appendChild(guessAnswer4);
                questionSelection.appendChild(guessAnswer3);
                questionSelection.appendChild(guessAnswer1);
                questionSelection.appendChild(guessAnswer2);
            }
        }
    }
}