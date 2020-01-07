document.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector("p")
    let select = document.querySelector("select")
    let btn = document.querySelector("button")
   let questionz = []
   let cAns = []
   let wAns = []
   let count = 0;
   let ans = "";
   

   const display = (count=0) => {
        axios.get(`http://localhost:3000/question`).then(res =>{
            res.data.forEach((el,i) => {
               
             wAns.push(el.incorrect_answers)
             cAns.push(el.correct_answer)
            //  wAns.push(el.correct_answer)
             questionz.push(el.question)
                
            });
            // debugger
            p.innerText = questionz[count]
            for(let i = 0; i < 3; i++){
                let option = document.createElement("option")
                option.innerText = wAns[count][i]
                select.appendChild(option)
            }
            let option = document.createElement("option")
                option.innerText = cAns[count]
                select.appendChild(option)
        })
    }    

        select.addEventListener("change",(e)=>{
            ans = e.target.value    
            // debugger
        })

        btn.addEventListener("click",() => {
            
        if(count >= 5){
            document.body.innerHTML = ""
            let h1 = document.createElement("h1")
            h1.innerText = "Game Over No more Trivia!!! "
            document.body.appendChild(h1)
        }else if(ans === cAns[count]){
                let ol = document.querySelector("ol")
                let li = document.createElement("li")
                li.innerText = "Correct!!"
                ol.appendChild(li)
                count++
                display(count)
                select.innerHTML = ""
        } else {
                    let ol = document.querySelector("ol")
                    let li = document.createElement("li")
                    li.innerText = "Incorrect!!"
                    ol.appendChild(li)
                    count++
                display(count)
                select.innerHTML = ""
                } 
        })

        display(0);

})