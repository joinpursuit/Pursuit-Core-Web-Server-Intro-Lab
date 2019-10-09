document.addEventListener("DOMContentLoaded", () => {
    console.log("hi")
})
const getTrivia = async () => {
    let serverUrl = "http://localhost:8000";
    let obj = await axios.get(serverUrl)
    let arr = obj.data.results
    loopArr(arr)
}
const loopArr = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i]
        let question = item.question;
        let answer  = item.correct_answer;
        let wrongAnswers = item.incorrect_answers;
        let choices = [];
            for(let j = 0; j < wrongAnswers; j++) {
                choices.push(wrongAnswers[j])
            }
            choices.push(answer)
        createQuestion(question, choices)
    }
}
const createQuestion = (question, choices) => {
    let container = document.querySelector("#container");
    let paragraph = document.createElement("p");
    let questionText = question;
        paragraph.innerText = questionText;
    let select = createSelect(choices)
        container.append(paragraph, select)
}
const createSelect = (choices) => {
    let select = document.createElement("select");
        select.value = "Select an Answer!"
    let optionChoices = randomizeArr(choices)
        for(let i = 0; i < optionChoices.length; i++){
            let option = document.createElement("option");
                option.innerText = optionChoices[i];
            select.append(option)
        }
    return select
}
const submitAnswer = () => {
    let button = document.createElement("button");
        button.id = "submitButton"
    button.addEventListener("onClick", checkAnswer);

}
// const checkAnswer = () => {
//         let button = document.querySelector("#submitButton");

// }
const randomizeArr = (arr) => {
    let newArr = [];
    for(let i =0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr[randomIndex]);
        arr.slice(randomIndex, (randomIndex + 1));
    } return newArr
}