document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello World")
    // let body = document.querySelector("body")
    let container = document.querySelector("container")
    const populateDiv = () => {
        axios.get("http://localhost:3000/data").then(res => {
        //   debugger; 
        res.data.results.forEach((el, i) => {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = "images.png";
            let h3 = document.createElement("h3")
            let str1 = el.name.first[0]
            let str2 = el.name.last[0]
            h3.innerHTML = str1.toUpperCase() + el.name.first.substr(1) + " " + str2.toUpperCase() + el.name.last.substr(1)
            div.appendChild(img)
            div.appendChild(h3)
            container.appendChild(div)
        })
        })
    }



    populateDiv()
})