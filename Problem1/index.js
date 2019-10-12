document.addEventListener('DOMContentLoaded', () => {
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL) 

    // displayResponseFromServer(resp.data)
    randomServerData(resp.data)
}
function displayResponseFromServer(data) {
    let serverResults = data.results
    randomServerData(serverResults)
}

function randomServerData(data) {
    let randomNum = Math.floor(Math.random() * data.results.length)
    let user = data;
    let innerContainer = document.createElement('div');
    document.body.appendChild(innerContainer);
    innerContainer.setAttribute('class', 'card')
    
  console.log('error?')
    if (data.results[randomNum].gender === 'male') {
        let blueImage= document.createElement('img')
        blueImage.src = "https://pedicon2020.com/img/avatar.png";
         innerContainer.append(blueImage)
     } else {
         let pinkImg = document.createElement('img')
         pinkImg.src = "https://www.showyourtrade.com/images/avatar/img_avatar.png";
         innerContainer.append(pinkImg)
 
        //  main.appendChild(innerContainer)
 
     }

    

    let userNames = document.createElement('h4')

    let userFirstLast = `${data.results[randomNum].name.first} ${data.results[randomNum].name.last}`;
    userNames.innerText = `${user.results[randomNum].name.first} ${user.results[randomNum].name.last}`;

    let paragraph = document.createElement('p')
    paragraph.innerText = `Nationality: ${data.nat}`
    document.body.appendChild(innerContainer)

}