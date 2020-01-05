document.addEventListener("DOMContentLoaded" , () => {
//    debugger
    axios.get(`http://localhost:3000/celeb`).then(res => {
      res.data.forEach(element => {
          let card = document.createElement("div")
          let image = document.createElement("img")
          let content = document.createElement("section")
          let h3 = document.createElement("h3")
          let p = document.createElement("p")

          image.src = element.src
          h3.innerText = `${element.first} ${element.last}`
          p.innerText = element.title

          content.appendChild(h3)
          content.appendChild(p)
          card.appendChild(image)
          card.appendChild(content)
          document.body.appendChild(card)
      });
        });
})