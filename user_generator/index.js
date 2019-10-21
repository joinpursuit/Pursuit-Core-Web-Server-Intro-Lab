document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const response = await axios.get(myURL)    
    displayDataFromServer(response.data)
}

const getRandomNum = () => {
    return Math.floor((Math.random() * 10) + 1);
}

const clearUser = () => {
    let userArea = document.querySelector(".card");
    userArea.innerHTML = "";
}

function displayDataFromServer(data) {
    // clearUser();
    let randomNum = getRandomNum()
    const userCard = document.createElement("div");
    userCard.setAttribute("class", "card");

    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "container");

    let firstName = data.results[randomNum].name.first;
    let lastName = data.results[randomNum].name.last;

    let name = document.createElement("h4")
    name.innerText = `${firstName} ${lastName}`;

    let userImage
    if (data.results[randomNum].gender === "male") {
        userImage = document.createElement("img");
        userImage.setAttribute("src", "img_avatar.png");
    } else if (data.results[randomNum].gender === "female") {
        userImage = document.createElement("img");
        userImage.setAttribute("src", "img_avatar2.png");
    }
    
    cardContainer.append(name);
    userCard.append(userImage, cardContainer);
    document.body.append(userCard);
}