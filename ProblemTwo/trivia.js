//document.addEventListener("DOMContentLoaded",()=>{
//   let main = document.querySelector(".main")
//       axios.get("http://localhost:4001").then(response=>{
//           let data = response.data.results 
//           debugger
//           data.forEach(el=>{
//             let question = document.querySelector("p")
//             let button = document.querySelector("button")
//             let answers = document.querySelector("select")
//             question.innerText = el.results.question
//             answers.innerText
//           })
//         })
// })

document.addEventListener("DOMContentLoaded", () => {
  let submitButton = document.querySelector("#submitButton")
  let p = document.querySelector("#p")
  let select = document.querySelector("#select")
  let quizData


  const questionSelect = (data) => {
    // let wrongOptions = data.incorrect_answers
    // let correct = data.correct_answer
    // p.innerText = data.question
    // submitButton.innerText = "Submit"
    // submitButton.addEventListener("click"(event))
  }
  
  const jsonData = async () => {
    let response = await axios.get("http://localhost:4001")
    quizData = response.data.results
    debugger
  }
  
  jsonData()
  questionSelect(quizData)
  
})