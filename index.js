

document.addEventListener("DOMContentLoaded", ()=>{
  let url = "http:localhost:3000/data"
  axios.get(url).then(res =>{
      //debugger
      res.data.results.forEach(el =>{
          let body = document.querySelector("body")
          let card = document.createElement("div")
          let info = document.createElement("div")
          let img = document.createElement("img")
          img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30d19077-7248-43b4-b5e9-eb73e2e2ddbb/d5cm82l-241c6bfb-e89c-4ce7-a130-5a7f5e326ede.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwZDE5MDc3LTcyNDgtNDNiNC1iNWU5LWViNzNlMmUyZGRiYlwvZDVjbTgybC0yNDFjNmJmYi1lODljLTRjZTctYTEzMC01YTdmNWUzMjZlZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JklOp5wTjh_ZOQyK2oL807iPyDZGSGMaiuN-REaejfk"
          card.appendChild(img)
          let h4 = document.createElement("h4")
          h4.innerText = el.name.title+ " " + el.name.first + " " + el.name.last 
          info.appendChild(h4)
          let p = document.createElement("p")
          p.innerText = el.gender
          info.appendChild(p)
          card.appendChild(info)
          body.appendChild(card)
      })
  })
})

