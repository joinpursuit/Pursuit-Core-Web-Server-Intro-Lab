document.addEventListener("DOMContentLoaded", () =>{
    multipleChoiceButton1().addEventListener("click", correctCheck1)
    multipleChoiceButton2().addEventListener("click", correctCheck2)
    multipleChoiceButton3().addEventListener("click", correctCheck3)
    multipleChoiceButton4().addEventListener("click", correctCheck4)
    loadDataFromServer()
})

document.addEventListener("submit", (event) => {
    event.preventDefault()
})

const multipleChoiceButton1 = () => {
    return document.querySelector("#button1")
}

const multipleChoiceButton2 = () => {
    return document.querySelector("#button2")
}

const multipleChoiceButton3 = () => {
    return document.querySelector("#button3")
}

const multipleChoiceButton4 = () => {
    return document.querySelector("#button4")
}

const correctCheck1 = () => {
    let alertUser = document.querySelector("#right-wrong")
    if (document.querySelector("#button1").name) {
        alertUser.innerText = "That's correct!"
        let loadNewQ = document.createElement("button")
        loadNewQ.innerText = "Next Question"
        loadNewQ.id = "nextQ"
        document.body.appendChild(loadNewQ)
        let listenerQ = document.querySelector("#nextQ")
        listenerQ.addEventListener("click", nextQuestion)
    } else {
        alertUser.innerText = "That's incorrect."
    }
}

const correctCheck2 = () => {
    let alertUser = document.querySelector("#right-wrong")
    if (document.querySelector("#button2").name) {
        alertUser.innerText = "That's correct!"
        let loadNewQ = document.createElement("button")
        loadNewQ.innerText = "Next Question"
        loadNewQ.id = "nextQ"
        document.body.appendChild(loadNewQ)
        let listenerQ = document.querySelector("#nextQ")
        listenerQ.addEventListener("click", nextQuestion)
    } else {
        alertUser.innerText = "That's incorrect."
    }
}

const correctCheck3 = () => {
    let alertUser = document.querySelector("#right-wrong")
    if (document.querySelector("#button3").name) {
        alertUser.innerText = "That's correct!"
        let loadNewQ = document.createElement("button")
        loadNewQ.innerText = "Next Question"
        loadNewQ.id = "nextQ"
        document.body.appendChild(loadNewQ)
        let listenerQ = document.querySelector("#nextQ")
        listenerQ.addEventListener("click", nextQuestion)
    } else {
        alertUser.innerText = "That's incorrect."
    }
}

const correctCheck4 = () => {
    let alertUser = document.querySelector("#right-wrong")
    if (document.querySelector("#button4").name) {
        alertUser.innerText = "That's correct!"
        let loadNewQ = document.createElement("button")
        loadNewQ.innerText = "Next Question"
        loadNewQ.id = "nextQ"
        document.body.appendChild(loadNewQ)
        let listenerQ = document.querySelector("#nextQ")
        listenerQ.addEventListener("click", nextQuestion)
    } else {
        alertUser.innerText = "That's incorrect."
    }
}


async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

let triviaQuestions

const displayDataFromServer = (data) => {
    console.log(data)

    triviaQuestions = data.results
    let randomIndex = Math.floor(Math.random() * 9)
    let randomQuestion = triviaQuestions[randomIndex]
    let question = randomQuestion.question
    let correct = randomQuestion.correct_answer
    let wrong1 = randomQuestion.incorrect_answers[0]
    let wrong2 = randomQuestion.incorrect_answers[1]
    let wrong3 = randomQuestion.incorrect_answers[2]
    let button1 = document.querySelector("#button1")
    let button2 = document.querySelector("#button2")
    let button3 = document.querySelector("#button3")
    let button4 = document.querySelector("#button4")
    let orderedArr = [button1, button2, button3, button4]
    let answers = [correct, wrong1, wrong2, wrong3]
    let shuffledArr = []
    let answerIndex = 0

    let questionDiv = document.querySelector("#q-holder")
    let printQuestion = document.createElement("p")
    printQuestion.innerText = question
    questionDiv.appendChild(printQuestion)

    let shuffler = (sample) => {
        while(sample.length > 0) {
            let rando = Math.floor(Math.random() * sample.length);
            let item = sample.splice(rando, 1);
            shuffledArr.push(item[0])
        }
        return shuffledArr
    }

    shuffler(orderedArr)

    for(index of shuffledArr) {
        console.log(index)
        let answer = answers[answerIndex]
        index.innerText = answer
        if(answer === correct) {
            index.name = "gotcha"
        }
        answerIndex += 1
    }

    console.log(randomIndex)
    console.log(randomQuestion)

}

const nextQuestion = () => {
    document.location.reload()
}