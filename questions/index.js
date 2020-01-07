document.addEventListener("DOMContentLoaded",() => {
    axios.get("http://localhost:3000/").then(res => {
        res.data.ForEach(el => {
            let p = document.createElement("p")
            let quiz = el.question
            p.innerText = el.question 
            console.log(quiz);
            
        })
 
    
})
})