document.addEventListener("DOMContentLoaded", () => {

  axios.get("http://localhost:3000").then(res =>{
    debugger
    let info = res.data[0].results
    debugger
    let select = document.querySelector("select")
    info.forEach(el => {
      let question = document.querySelector("p")
      let answers = document.createElement("option")
      question.innerText = el.question
      answers.innerText = el.correct_answer + " " + el.incorrect_answers
      select.appendChild(answers)
      
    })
  })

  })