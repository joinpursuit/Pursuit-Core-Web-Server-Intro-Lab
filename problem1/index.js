document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3001").then(res => {
        let div = document.querySelector("#problem1");
        res.data.forEach(person => {
            let img = document.createElement("img");
            if(person.gender === "male"){
                img.src = "./img_male.png";
            } else if (person.gender === "female"){
                img.src = "./img_female.png";
            }
            let h4 = document.createElement("h4");
            h4.innerText = `${person.name.title}. ${person.name.first} ${person.name.last}`;
            let p = document.createElement("p");
            p.innerText = `Nationality: ${person.nat}`;
            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(p);
        })
    })
})