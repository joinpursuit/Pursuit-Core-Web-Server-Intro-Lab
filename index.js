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
    // this is to create the outter card
    let container = document.createElement('div')
    container.setAttribute("class", "card")
    //to create image tag
    let image = document.createElement('img')
    //let img = finish in a min
    // image.setAttribute("src", /*img*/)
    
    //this is for inner card
    let innerContainer = document.createElement('div')
    innerContainer.setAttribute("class", "container")
    let header1 = document.createElement("h4")
    //header1.innerText = finish later
    let ptag = document.createElement('p')
    //ptag.innerText = finish later

    //append stuff in order after your done
    
    
}

// function addMessageToUI(message) {
//     let newElement = document.createElement('p')
//     newElement.innerText = "Server Says: " + message
//     document.body.appendChild(newElement)
// }