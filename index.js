document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello World")
    let body = document.querySelector("body")
    const populateDiv = () => {
        axios.get("http://localhost:3000/data").then(res => {
        //   debugger; 
        res.data.results.forEach(el => {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = "img_avatar2.png";
            let h3 = document.createElement("h3")
            h3.innerHTML = el.name.first
            div.appendChild(img)
            div.appendChild(h3)
            body.appendChild(div)
        })
        })
    }



    populateDiv()
})