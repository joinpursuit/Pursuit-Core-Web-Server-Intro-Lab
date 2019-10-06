document.addEventListener('DOMContentLoaded', () =>{
    getUsersButton().addEventListener('click', loadDataFromServer)
})

const getUsersButton = () => {
    return document.querySelector("#get-users-button")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

const displayDataFromServer = (data) => {
    console.log(data)
    let users = data.results
    let userId = 1
    for(user of users) {
        console.log(user);
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card");
        cardDiv.id = userId
        
        if (user.gender === "male") {
            let profileImg = document.createElement("img")
            profileImg.src = "https://www.w3schools.com/howto/img_avatar.png"
            cardDiv.appendChild(profileImg)
        } else {
            let profileImg = document.createElement("img")
            profileImg.src = "https://www.w3schools.com/howto/img_avatar2.png"
            cardDiv.appendChild(profileImg)
        }

        let userInfo = document.createElement("div")
        userInfo.classList.add("container");
        cardDiv.appendChild(userInfo)

        let userName = document.createElement("h4")
        userName.innerText = `${user.name.first} ${user.name.last}`
        userInfo.appendChild(userName)

        document.body.appendChild(cardDiv);
        userId += 1
    }
}