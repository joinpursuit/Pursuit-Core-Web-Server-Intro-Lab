document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3001/"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

function displayDataFromServer(data) {
    console.log(data);
    
    
    
}

// function addMessageToUI(message) {
//     let newElement = document.createElement('p')
//     newElement.innerText = "Server Says: " + message
//     document.body.appendChild(newElement)
// }