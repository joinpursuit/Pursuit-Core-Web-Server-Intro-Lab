document.addEventListener("DOMContentLoaded",()=> {
    const createCards = async () => {
        let res = await axios.get("http://localhost:3000/results")
        // debugger
        try {
            res.data.forEach(el => {
                let name = el.name
                let fullName = `${name.title} ${name.first} ${name.last}`
                let div = document.createElement("div")
                let div2 = document.createElement("div")
                let img = document.createElement("img")
                let h4 = document.createElement("h4")
                let p = document.createElement("p")
                let p2 = document.createElement("p")
                img.src = "https://www.pinclipart.com/picdir/big/209-2098523_individuals-person-icon-circle-png-clipart.png"
                img.alt = "Avatar"
                img.style = "width:100%"
    
                div.className = "card"
                document.body.appendChild(div)
                div.appendChild(img)
    
                div2.className = "container"
                div.appendChild(div2)
                h4.innerHTML =  `<b>${fullName}</b>`
                div2.appendChild(h4)
    
                p.innerText = el.gender
                p2.innerText = el.nat
    
                div2.appendChild(p)
                div2.appendChild(p2)
                
                // debugger
    
    
    
            })

        }catch(err) {
          console.log(err)
        }
        

    }
    createCards()
})