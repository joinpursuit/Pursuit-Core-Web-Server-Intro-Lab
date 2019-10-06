document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})


function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL)    
    displayResponseFromServer(resp.data.results)

}

let counter = 0;
let questionArr = [];


function displayResponseFromServer(data) {
    console.log(data);


    let bigDiv = document.getElementById("bigDiv")
    console.log("bigDiv", bigDiv)


    for(let trivia of data) {
        console.log("trivia", trivia)
        let questionAndAnswer = document.createElement("div");
        questionAndAnswer.className = "questionAndAnswer";

        let question = document.createElement('p');
        question.innerText = trivia.question;

        

        let selectList = document.createElement("select");

        for (let incorrectOption of trivia.incorrect_answers) {
            let wrongChoice = document.createElement("option");
            wrongChoice.text = incorrectOption;
            selectList.add(wrongChoice)
        }

        let rightChoice = document.createElement("option");
        rightChoice.text = trivia.correct_answer;
        selectList.add(rightChoice);

        let answerButton = document.createElement("button");
        answerButton.innerText = "submit"
        answerButton.addEventListener("click", () => {
            console.log(selectList.options[selectList.selectedIndex].text)
            if (selectList.options[selectList.selectedIndex].text === trivia.correct_answer) {
                let right = document.createElement("h4");
                right.innerText = "Correct!"
                questionAndAnswer.append(right);
            } else {
                let wrong = document.createElement("h4");
                wrong.innerText = "Nope!";
                questionAndAnswer.append(wrong);
            }
            counter++;
            nextQuestion();
        })

        questionAndAnswer.append(question, selectList, answerButton);
        questionArr.push(questionAndAnswer);
        console.log("question arr counterrr", questionArr[counter])
        bigDiv.append(questionArr[counter]);
    }
   
}

function nextQuestion() {
    console.log("questionArr[counter]", questionArr[counter])
    bigDiv.append(questionArr[counter]);
}