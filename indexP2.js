document.addEventListener("DOMContentLoaded", ()=>{
   axios.get("http://localhost:3000").then(res=>{
       debugger
    res.data.forEach(el=>{
        let p=document.querySelector("#question");
        p.innerText=el.question;
    })
   })


})