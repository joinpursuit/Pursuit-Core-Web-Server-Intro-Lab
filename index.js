document.addEventListener("DOMContentLoaded", ()=>{
    axios.get("http://localhost:3000/people").then(res =>{
        let ul = document.querySelector('ul')
    res.data.forEach(person =>{
            let li = document.createElement("li")
            li.innerTex t= person.name.title;
            ul.apppendChild(li)
            
        })
    })
})
