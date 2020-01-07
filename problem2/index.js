document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000").then(res => {
        let div = document.querySelector("#problem2");
        res.data.forEach(el => {
            let p = document.createElement("p");
            p.innerText = el.question;
            let select = document.createElement("select");
            div.appendChild(p);
        })
    })
})