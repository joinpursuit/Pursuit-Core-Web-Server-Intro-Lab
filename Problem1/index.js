document.addEventListener('DOMContentLoaded', () => {
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL) 
    let main = document.querySelector('body')
    let button= document.querySelector('button');
    button.style.display = 'none'
    displayResponseFromServer(resp.data)
}
function displayResponseFromServer(data) {
    let serverResults = data.results
    randomServerData(serverResults)
}

function randomServerData(data) {
    let randomNum = Math.floor(Math.random() * data.results.length)


    let innerContainer = document.createElement('div')
    innerContainer.setAttribute('class', 'container')

    let userNames = document.createElement('h4')
    let userFirstLast = `${data.results[randomNum].name.first} ${data.results[randomNum].name.last}`;
    userNames.innerText = userFirstLast

    let paragraph = document.createElement('p')
    paragraph.innerText = `Nationality: ${response.data.nat}`
    document.body.append(emptyDiv, profilePic, innerContainer, userFirstLast, paragraph)
    if (data.results[randomNum].gender === 'male') {
       let blueImage= document.createElement('img')
       blueImage.src = "https://pedicon2020.com/img/avatar.png";
        innerContainer.append(blueImage)
    } else {
        let pinkImg = document.createElement('img')
        pinkImg.src = "https://www.showyourtrade.com/images/avatar/img_avatar.png";
        innerContainer.append(pinkImg)

        main.appendChild(innerContainer)

    }
}