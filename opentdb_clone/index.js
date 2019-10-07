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
    console.log(data)
}