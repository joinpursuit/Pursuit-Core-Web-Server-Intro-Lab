
document.addEventListener("DOMContentLoaded",()=>{
    let main = document.querySelector(".main")
        axios.get("http://localhost:4000/people").then(response=>{
            let data = response.data.results 
            
            data.forEach(person=>{
            
                let div =document.createElement("div")
                let ul = document.createElement("ul")
                let imageLi = document.createElement("li")
                let image = document.createElement("img")
                let name = document.createElement("li")
                let gender = document.createElement("li")
                let nationality = document.createElement("li")
                image.src = "https://previews.123rf.com/images/goodzone95/goodzone951611/goodzone95161100164/68628295-cat-icon-simple-design-on-a-white-background-vector-illustration.jpg"
                name.innerText =person.name.title + person.name.first + person.name.last 
                gender.innerText = person.gender
                nationality.innerText = person.nat

                ul.appendChild(name)
                ul.appendChild(gender)
                ul.appendChild(nationality)
                div.appendChild(image)
                div.appendChild(ul)
                main.appendChild(div)
                
            })
        })
})