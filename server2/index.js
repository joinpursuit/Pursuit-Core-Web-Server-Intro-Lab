document.addEventListener('DOMContentLoaded', () => {
    triviaButton().addEventListener('click', loadDataFromServer)
})

 let newArray = [];

function triviaButton(){
    return document.querySelector("#triviaButton")
}

async function loadDataFromServer() {
    const url = "http://localhost:3000"
    const resp = await axios.get(url)

    displayData(resp.data);
    
}

function displayData(data){
    console.log(data)
for(let i = 0; i < data.results.length; i++){
        results = data.results[i]

        const category = document.querySelector('h2')
        category.innerText = `Category: ${results.category}`

        const difficulty = document.querySelector('h3')
        difficulty.innerText = `Difficulty: ${results.difficulty}`

        const question = document.querySelector('#para')
        question.innerText = `Question: ${results.question}`

}

    let resetParagraph = document.querySelector("#answerParagraph")
    let wrongAnswerParagraph = document.querySelector("#wrongAnswerParagraph")
    if(resetParagraph || wrongAnswerParagraph){
        resetParagraph.innerText = ""
        // wrongAnswerParagraph.innerText = ""
    }
    
arr = results;
selectButton(results)

}

 function selectButton (arr) {
    
     let empArr = [...arr.incorrect_answers, arr.correct_answer];
     
    console.log("showing array not randomized below: " )
    console.log(empArr)
    
    randomizeArr(empArr)
    
    console.log("After invoke function show's nothing below : " )
    console.log(empArr)

    // console.log(arr.incorrect_answers)
    let select = document.querySelector("#answers")
    select.innerText = ""

    let selectAns = document.createElement("option")
    selectAns.innerText = "Select Answer"
    select.appendChild(selectAns)
    
    for(let i = 0;  i < arr.incorrect_answers.length; i++) { 
        // console.log(arr.incorrect_answers)
        let newSelect = document.createElement("option");
         newSelect.innerText = arr.incorrect_answers[i]
        // console.log(newSelect);
        // console.log(select);
        
    select.appendChild(newSelect);
    }
    // console.log(arr.correct_answer)
    let correctAnswer = document.createElement("option")
    correctAnswer.innerText = arr.correct_answer

    select.appendChild(correctAnswer)
    
 }

 function checkAnswer() {
let option = document.querySelector("#answers")
    // console.log(option.value)
    // console.log(arr)
    if(option.value === arr.correct_answer){
        let para = document.createElement('p')
        para.setAttribute("id", "answerParagraph")
        para.innerText = "This is the correct answer"

        document.body.appendChild(para)
        loadDataFromServer()
    }
    else{
        let checkWrongAnswer = document.querySelector("#wrongAnswerParagraph")
        if(checkWrongAnswer){
            checkWrongAnswer.innerText = "Try Again"
        document.body.appendChild(checkWrongAnswer)

        }else{
            let para = document.createElement('p')
            para.innerText = "Try Again"
            para.setAttribute("id", "wrongAnswerParagraph")
        document.body.appendChild(para)

        }
        document.body.appendChild(para)
    }
 }

 function randomizeArr(empArr){
    //  const newArray = []
     let randomIndex;

    while(empArr.length > 0){
        randomIndex = Math.floor(Math.random() * (empArr.length -1))
        
        const arrayItem = empArr[randomIndex];

        newArray.push(arrayItem)

        empArr.splice(randomIndex, 1)
    
    }
    console.log("Showing randomized array below : " )
    console.log(newArray)
    return newArray;
 }

