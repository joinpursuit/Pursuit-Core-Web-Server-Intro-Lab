document.addEventListener("DOMContentLoaded", () => {
   let container = document.querySelector("#container")
   axios.get("http://localhost:3000").then(res => {
       res.data.forEach(person => {
           let div = document.createElement("div")
           div.className = "card"
           let img = document.createElement("img")
           img.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
           img.style.width = "25%"
           div.appendChild(img)
           let personInfo = document.createElement("div")
           personInfo.className = "personInfo"
           let h4 = document.createElement("h4")
           h4.innerText = person.name.first + " " + person.name.last
           let gender = document.createElement("p")
           gender.innerText = person.gender 
           let nat = document.createElement("p")
           nat.innerText = person.nat

           personInfo.appendChild(h4)
           personInfo.appendChild(gender)
           personInfo.appendChild(nat)
           div.appendChild(personInfo)
           document.body.appendChild(div)
       })
   }) 
})