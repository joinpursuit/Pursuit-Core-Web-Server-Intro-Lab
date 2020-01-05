document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector("div");
    axios.get("http://localhost:3000/").then(res => {
        res.data.forEach((el) => {
            let ul = document.createElement("ul");
            let image = document.createElement("img");
            if(el.gender === "male") {
                image.src="./img_avatar1male.png"
            } else {
                image.src="./img_avatar2female.png"
            }
            ul.appendChild(image)
            let title = document.createElement("li");
            title.innerText = el.name.title
            let name = document.createElement("li");
            name.innerText = el.name.first + " " + el.name.last
            ul.appendChild(title);
            ul.appendChild(name);
            div.appendChild(ul)
        })
    })
})