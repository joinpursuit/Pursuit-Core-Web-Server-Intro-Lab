let ul = document.querySelector("ul")

document.addEventListener("DOMContentLoaded", ()=>{
    axios.get("http://localhost:3000/people").then(res =>{
        debugger
    res.data.forEach(person =>{
            let li = document.createElement("li")
            li.innerText = person.name.title;
            ul.apppendChild(li)
            
        })
    })
})
