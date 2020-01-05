document.addEventListener("DOMContentLoaded", () =>{
    let correct = ""
    let answers = []
    let quest = document.querySelector("#question")
    
    axios.get("http://localhost:3000/trivia").then(res =>{

        const createQ = (index = 0)=>{
            let p = document.createElement("p")
            p.innerText = res.data[index]["question"]
            quest.appendChild(p)
            let select = document.createElement("select")
            let start = document.createElement("option")
            start.selected = true
            start.disabled = true
            start.innerText = "select an answer"
            select.appendChild(start)
            correct = res.data[index]["correct_answer"]
            answers.push(correct)
            res.data[index]["incorrect_answers"].forEach(ans =>{
                answers.push(ans)
            })
            shufAnswers = answers.sort(function(a,b){return 0.5 - Math.random()});
            shufAnswers.forEach(ans =>{
                let option = document.createElement("option")
                option.innerText = ans
                select.appendChild(option)
            })
            let sub = document.createElement("button")
            sub.type = "submit"
            sub.innerText = "submit"

            quest.appendChild(select)
            quest.appendChild(sub)
            sub.addEventListener("click",()=>{
                event.preventDefault() 
                if(select.value === correct){
                    alert("correct")
                } else {
                    alert(`wrong the correct is ${correct}`)
                }
                index++
                quest.innerHTML = ""
                correct = ""
                answers = []

                createQ(index)
            })
        }
        createQ()
    })
})