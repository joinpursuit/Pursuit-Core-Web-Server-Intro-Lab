document.addEventListener("DOMContentLoaded", () =>{
    multipleChoiceButton1().addEventListener("click", correctCheck)
    multipleChoiceButton2().addEventListener("click", correctCheck)
    multipleChoiceButton3().addEventListener("click", correctCheck)
    multipleChoiceButton4().addEventListener("click", correctCheck)
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

const correctCheck = () => {
    console.log("gotcha")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

const displayDataFromServer = (data) => {
    console.log(data)

    let triviaQuestions = data.results
    let randomIndex = Math.floor(Math.random() * 9)
    let randomButton = Math.floor(Math.random() * 2)
    let randomQuestion = triviaQuestions[randomIndex]
    console.log(randomIndex)
    console.log(randomButton)
    console.log(randomQuestion)

}