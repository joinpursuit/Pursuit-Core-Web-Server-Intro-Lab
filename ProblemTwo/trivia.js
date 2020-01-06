document.addEventListener("DOMContentLoaded",()=>{
  questionSelect(triviaData)
})
const triviaData =async()=>{
    let url = "http://localhost:4001"
    let response = await axios.get(url)
    return response.data.results
}


const questionSelect = (data)=>{
    let submitButton = document.querySelector("#submitButton")
    let p = document.querySelector("#p")
    let select =document.querySelector("#select")
    let wrongOptions = data.incorrect_answers
    let correct = data.correct_answer
    p.innerText = data.question
    submitButton.innerText = "Submit"
    submitButton.addEventListener("click"(event))
}
