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
            debugger
        })

        btn.addEventListener("click",() => {
            
            
            
            if(ans === cAns[count]){
                let ul = document.querySelector("ul")
                let li = document.createElement("li")
                li.innerText = "Correct!!"
                ul.appendChild(li)
                count++
                display(count)
                select.innerHTML = ""
                debugger
                } 
                count++
                display(count)
                select.innerHTML = ""
        })

        display(0);

})