document.addEventListener("DOMContentLoaded",()=>{
    let div = document.querySelector("#trivia");
    axios.get("http://localhost:9000").then(res =>{
        res.data.forEach(el => {
            let p = document.createElement("p");
            p.innerText = `${el.question}`
            div.appendChild(p);
        });
    let select = document.createElement("select");
    select.addEventListener("change", (e)=>{
        let url = "http://localhost:9000/" + e.target.value;
        debugger
        axios.get(url).then(res =>{
            let answers = res.data;
            answers.forEach(answer =>{
                debugger;
                let option = document.createElement("option");
                option.innerText = `${answer}`
            })
        })
    })
    div.appendChild(select);
    })
    
})