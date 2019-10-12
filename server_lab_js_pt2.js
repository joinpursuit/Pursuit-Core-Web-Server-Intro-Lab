document.addEventListener("DOMContentLoaded", () => {
    loadDataFromServer()
})

async function loadDataFromServer () {
    const url = "http://localhost:3000/"
    const resp = await axios.get(url)  
    displayResponseFromServer(resp.data)
}

const displayResponseFromServer = (resp) => {
    let results = resp.results
    console.log(results)
    
    displayQuestionInfo(results)
    
}

const displayQuestionInfo = (results) => {
    let category = document.querySelector("#currentCategory")
    let difficulty = document.querySelector("#difficulty")
    let questionPTag = document.querySelector("#question")

    
    let currentQuestion = results[Math.floor(Math.random() * results.length)]
        let questionCategory = currentQuestion.category 
        let questionDifficulty = currentQuestion.difficulty 
        let question = currentQuestion.question

        category.innerText = questionCategory
        difficulty.innerText = `Difficulty: ${questionDifficulty}`
        questionPTag.innerText = `Question: ${question}`
        
        populateSelectTag(currentQuestion)     
}

const populateSelectTag = (currentQuestion) => {
   select = document.querySelector('select')

let incorrectAnswers = currentQuestion.incorrect_answers 
  correctAnswer = currentQuestion.correct_answer
  incorrectAnswers.push(correctAnswer)
  console.log(incorrectAnswers)


  let randomizedArr = randomizeSelect(incorrectAnswers)
  console.log(randomizedArr)
   
   for (let i = 0; i < randomizedArr.length; i++){
       let newOption = document.createElement('option')
       newOption.innerText = randomizedArr[i]
       select.append(newOption)
   }
  
   let button = document.querySelector("#submitBtn")
    button.addEventListener('click', submitUserAnswer)
}

const randomizeSelect = (arr) => {
let answerArr = []
   for (let i = 0; i < 4; i++){
       let randomIndex = Math.floor(Math.random() * arr.length)
       let answer = arr.splice(randomIndex, 1)
      answerArr.push(answer[0])
   }
   return answerArr
}


const submitUserAnswer = () => {
   let userAnswer = select.value 
   console.log(userAnswer)
   if (userAnswer === correctAnswer){
       window.alert("Your answer was correct!")
       setTimeout('location.reload(true)', 10)
   } else {
       window.alert("Your answer was incorrect")
       setTimeout('location.reload(true)', 10)
   }
}