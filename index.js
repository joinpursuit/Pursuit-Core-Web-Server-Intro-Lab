document.addEventListener("DOMContentLoaded",()=>{

    const getCards = ()=>{

axios.get("http://localhost:3000/data").then(res => {
    debugger


res.data.results.forEach((el)=>{
let card = document.querySelector(".card")
let img = document.createElement("img")
img.src = "hackerKid.png";
card.appendChild(img)
let h3 = document.createElement("h3")
h3.innerHTML = el.name.first + " " + el.name.last
card.appendChild(h3)

})



})



    }

   getCards()

})