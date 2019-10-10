document.addEventListener("DOMContentLoaded", () => { //loading the DOM and listening for the grabUserButton function to 
    grabUserButton().addEventListener("click", loadData)
})

const grabUserButton = () => {
    return document.querySelector("#getUser") // getting the button by its id
}

const loadData = async () => {
    const url = "http://localhost:3000"
    const response = await axios.get(url) // fetching the data with the list of users and the required info.
    getRandom()
    displayData(response.data.results)
}

const getRandom = () => {
    return Math.random() * (10 - 1) + 1;
}

const displayData = (users) => { //displaying the data that we requested from the server. 
    console.log("user", users)
    const mainDiv = document.querySelector(".main-div")
    
    for (let i = 0; i < users.length; i++) {
        console.log("loop running")
        let user = users[i]
         const userCard = document.createElement("div")

        const userHeader = document.createElement("h2")
        userHeader.innerText = `${user.name.title}
        ${user.name.first} ${user.name.last}`
            console.log(userHeader.innerText)
        const userGender = document.createElement("p")
        userGender.innerText = user.gender;

        const userNationality = document.createElement("p")
        userNationality.innerText = user.nat;

        const image = document.createElement("img")
        
        if (user.gender === "female") {
            image.src = "https://gatheronbroadway.com/wp-content/uploads/2018/04/person-placeholder-female-300x300.png";
        } else {
           image.src = "http://tridentenviro.com/wp-content/uploads/2018/04/Trident-Placeholder-1024x683.jpg"
        }
        
        userCard.append(userHeader, userGender, userNationality, image)
        mainDiv.appendChild(userCard)
    }
}