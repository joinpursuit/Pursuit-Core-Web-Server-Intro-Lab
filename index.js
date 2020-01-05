document.addEventListener("DOMContentLoaded", () =>{
    let container = document.querySelector("#card");
    axios.get("http://localhost:8000").then(res =>{
        res.data.forEach(el =>{
            debugger;
            let div = document.createElement("div");
            div.className = "card";
            let img = document.createElement("img");
            img.src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
            img.style.width = "110%"
            container.appendChild(img);
            let personName = document.createElement("div");
            personName.className

        })
    })
})