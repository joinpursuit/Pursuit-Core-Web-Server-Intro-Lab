
document.addEventListener("DOMContentLoaded", ()=>{
    axios.get("http://localhost:3000/people").then(res =>{
        debugger
        let ul = document.querySelector("ul")
        res.data.results.forEach(person =>{ 
            let li = document.createElement("li")
            let img = document.createElement("img")
            img.src = "https://www.w3schools.com/howto/img_avatar.png"
            
            li.innerText = `Name: ${person.name.title} ${person.name.first} ${person.name.last} Nationality: ${person.nat} `;
            ul.appendChild(img)
            ul.appendChild(li)

        })
    })
})
