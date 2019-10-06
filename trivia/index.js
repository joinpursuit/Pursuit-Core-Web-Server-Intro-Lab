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
    for(let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].question)
        let questionSelection = document.querySelector('#possAnswers');
        let newQuestion = document.createElement("option");

        newQuestion.innerText = data.results[i].incorrect_answers;

        questionSelection.appendChild(newQuestion);
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