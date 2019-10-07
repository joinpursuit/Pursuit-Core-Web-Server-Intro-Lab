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

function displayDataFromServer(data) {
    const userCard = document.createElement("div");
    userCard.setAttribute("class", "card");

    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "container");

    let firstName = data.results[getRandomNum()].name.first;
    let lastName = data.results[getRandomNum()].name.last;

    let name = document.createElement("h4")
    name.innerText = `${firstName} ${lastName}`;

    const userImage = document.createElement("img");
    userImage.setAttribute("src", "img_avatar.png");

    cardContainer.append(name);
    userCard.append(userImage, cardContainer);
    document.body.append(userCard);
}