document.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector("p")
    let select = document.querySelector("select")
    let btn = document.querySelector("button")
   let questionz = []
        axios.get(`http://localhost:3000/question`).then(res =>{
            res.data.forEach(el => {
                let option = document.createElement("option")
                option.innerText = el.correct_answer
                option.value =  el.correct_answer
                option.innerText = el.incorrect_answers
                option.value = el.incorrect_answers
                select.appendChild(option)
                questionz.push(el.question)
                debugger
            });
        })



        select.addEventListener("change",(e)=>{

        })

        btn.addEventListener("click",() => {

        })



})