document.addEventListener('DOMContentLoaded', () =>{
    fillSelectTag();
    // loadDataFromServer();
    // getServerButton().addEventListener('click', loadDataFromServer)
})

async function fillSelectTag () {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

function getServerButton() {
    return document.querySelector("#serverButton")
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


    // for(let i = 0; i < data.results.length; i++) {
    // let triviaHolder = document.createElement('div');
    // triviaHolder.id = 'trivia';

    // const newCard = document.createElement('img');

    // if(data.results[i].gender === 'male') {
    //     newCard.src = "img_avatar.png"
    // } else {
    //     newCard.src = "img_avatar2.png"
    // }

    // newCard.alt = "Avatar";
    // newCard.style = "width:100%";

    // cardHolder.appendChild(newCard);

    // let currQuestion = document.createElement('p');
    // let possAnswers = document.createElement('select');
    // let userAnswer = document.createElement('button');

    // currQuestion.id = 'question';
    // possAnswers.id = 'answers';
    


    // const fullName = document.createElement('p');
    // fullName.innerText = `${data.results[i].name.first.toUpperCase()} ${data.results[i].name.last.toUpperCase()}`
    // fullName.style.fontWeight = 'bold';

    // const userTitle = document.createElement('p');
    // userTitle.innerText = `${data.results[i].name.title}`

    // userHolder.appendChild(fullName)
    // userHolder.appendChild(userTitle)
    // cardHolder.appendChild(userHolder);

    // document.body.appendChild(cardHolder);

    // }
}