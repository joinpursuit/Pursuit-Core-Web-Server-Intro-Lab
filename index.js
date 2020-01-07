document.addEventListener("DOMContentLoaded", () => {
    let cardContent = document.querySelector(".content");
    axios.get("http://localhost:3000/data").then(res => {
        console.log(res.data)
        res.data.results.forEach((user) => {
            let card = document.createElement("div")
            card.className = "card"
            let avatar = document.createElement("img")
            avatar.src = user.gender === "male" ? "assests/male.png" : "assests/female.png"
            let container = document.createElement("div")
            container.className = "container"
            let h4 = document.createElement("h4")
            let b = document.createElement("b")
            b.innerText = `${user.name.first} ${user.name.last}`
            h4.appendChild(b)
            container.appendChild(h4)
            let p = document.createElement("p")
            p.innerText = user.nat
            container.appendChild(p)


            card.appendChild(avatar)
            card.appendChild(container)
            cardContent.appendChild(card)
            

        })
    })
})