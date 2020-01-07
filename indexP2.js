document.addEventListener("DOMContentLoaded", ()=>{
    let questionPool = [];
    let displayquestion = [];
    let answer=[]
    let num=0
    axios.get("http://localhost:3000").then(res=>{
        let questionPool = res.data;
        displayquestion=questionPool[num];
        answer=displayquestion.incorrect_answers
        answer.push(displayquestion.correct_answer)
        shuffle(answer);
        
        let p=document.querySelector("#question"); 
        p.innerText = displayquestion.question;

        let select = document.querySelector("select")
        answer.forEach(el=>{
           let option = document.createElement("option");
           option.innerText = el;
        select.appendChild(option)
       })
   })
   let btn =document.querySelector("#button")
   btn.addEventListener("click", (e) => {
       debugger
   })




})

//    num++



const shuffle =(array)=> {
    array.sort(() => Math.random() - 0.5);
  }