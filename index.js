document.addEventListener("DOMContentLoaded", () =>{
    axios.get("http://localhost:3000/randomUser").then(res =>{
        res.data.forEach(el =>{
            let card = document.createElement("div");
            card.className = "card"
            let imagef = document.createElement("img")
            imagef.src = "https://www.w3schools.com/howto/img_avatar2.png"
            imagef.className = "pic"
            let imageM = document.createElement("img")
            imageM.src = "https://www.w3schools.com/w3css/img_avatar3.png"
            imageM.className = "pic"
            if(el.gender === "female"){
                card.appendChild(imagef)
            } else {
                card.appendChild(imageM)
            }
            let container = document.createElement("div")
            container.className = "container"
            let h4 = document.createElement("h4")
            h4.innerText = `${el.name.title} ${el.name.first} ${el.name.last}`
            let p = document.createElement("p")
            p.innerText = el.nat
            container.appendChild(h4);
            container.appendChild(p);
            card.appendChild(container);
            document.body.appendChild(card);
        })
    })
})