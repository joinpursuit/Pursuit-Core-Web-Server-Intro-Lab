let questionPool = [];
let displayquestion = [];
let answer=[];
let num=0;

document.addEventListener("DOMContentLoaded", ()=>{
    axios.get("http://localhost:3000").then(res=>{
        questionPool = res.data;
        shuffle(questionPool);
        getQuestion();
        showonHTML()
    })

    let btn =document.querySelector("button")
    btn.addEventListener("click",event=>{
        let sel =document.querySelector("select")
        if(sel.selectedOptions[0].value===displayquestion.correct_answer){
        if(!questionPool){
            alert("you pass All Question, press ok to restart")
            location.reload();
        }
        alert("you are right"),
           getQuestion();
           showonHTML()
        }else{
            alert("your are wrong, please select different answer")
        }
    })
    
})

const getQuestion=()=>{
    displayquestion=questionPool.pop();
    answer=[];
    answer=displayquestion.incorrect_answers;
    answer.push(displayquestion.correct_answer)
    shuffle(answer);
}

const showonHTML=()=>{
    let p=document.querySelector("#question"); 
    p.innerText = displayquestion.question;
    let select = document.querySelector("select")
    select.innerHTML=""

    answer.forEach(el=>{
        let option = document.createElement("option");
        option.innerText = el;
        select.appendChild(option)
    })
}

    const shuffle =(array)=> {
        array.sort(() => Math.random() - 0.5);
      }