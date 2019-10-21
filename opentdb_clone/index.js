document.addEventListener('DOMContentLoaded', () =>{
    let button = document.querySelector("#serverButton")
    button.addEventListener('click', generateTrivia)
})

const generateTrivia = async () => {
    let trivia = document.createElement("p");
    let select = document.createElement("select")
    let option = document.createElement("option")
    const myURL = "http://localhost:3000/"
    const response = await axios.get(myURL)   
    let triviaSelection = response.data.results[getRandomNum()]
    // console.log(response.data.results[getRandomNum()])
    // console.log(question)

    trivia.innerText = `Question: ${triviaSelection.question}`
    console.log(response.data)
     for(let answer of response.data.results)
    document.body.append(trivia)
    document.body.append(select)
}

const getRandomNum = () => {
    return Math.floor((Math.random() * 10) + 1);
}

