document.addEventListener("DOMContentLoaded", () => {
    let cards = document.querySelector(".card")
    axios.get("http://localhost:3000").then(res => {  
        let info = res.data[0]["results"][0]["results"]

        for(let i = 0; i < info.length; i++){
            let div = document.createElement("div");
            let img = document.createElement("img")
            let person = document.createElement("ul")
            let gender = document.createElement("li")
            let name = document.createElement("li")
            let nationality = document.createElement("li")
            img.src = "./img_568657.png"
            gender.innerText = info[i].gender
            name.innerText = `${info[i].name.last},${info[i].name.first}`
            nationality.innerText = info[i].nat
            person.appendChild(gender)
            person.appendChild(name)
            person.appendChild(nationality)
            div.appendChild(img)
            div.appendChild(person)
            cards.appendChild(div)
        }
    })
})