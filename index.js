document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL)    
    displayResponseFromServer(resp.data)
}

function displayResponseFromServer(data) {
    console.log(data)
    const emptyDiv = document.createElement('div')
    emptyDiv.setAttribute('class', 'container')
    let profilePic = document.createElement('img')
    profilePic.setAttribute('src', "/*img")
    let innerContainer = document.createElement('div')
    innerContainer.setAttribute('class', 'container')
    let firstHeader = document.createElement('h4')
    firstHeader.innerText= data.name
    let paragraph = document.createElement('p')
    paragraph.innerText = data.nat
    document.body.append(emptyDiv, profilePic, innerContainer, firstHeader, paragraph)
}


