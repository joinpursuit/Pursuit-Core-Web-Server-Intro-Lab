document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await fetch(myURL).then(res => res.json())
    displayResponseFromServer(resp.results)
    console.log('loadDataFromServer ', resp);
}

function displayResponseFromServer(resp) {
    console.log('displayResponseFromServer', resp)
    let display = document.querySelector('#display_info');
    let question = resp[Math.floor(Math.random() * 10)]
    console.log(`This is our random question: `, question);
    resp.forEach(q => randomizeAnswers(q.correct_answer, q.incorrect_answers);
    // while (display.firstChild) display.removeChild(display.firstChild)
    // users.forEach(user => addToDOM(user))
}

function addToDOM(triviaQuestion) {
    console.log(`This function is empty this is the input: ${triviaQuestion}`);
}

function randomizeAnswers(correct, incorrect) {
    let choices = [correct].concat(incorrect);
    choices = shuffle(choices);
    return {
        correct,
        incorrect,
        choices,
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}