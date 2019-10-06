document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

function displayDataFromServer(data) {
    console.log(data)


    for(let i = 0; i < data.results.length; i++) {
    let cardHolder = document.createElement('div');
    cardHolder.id = 'card';

    const newCard = document.createElement('img');

    if(data.results[i].gender === 'male') {
        newCard.src = "img_avatar.png"
    } else {
        newCard.src = "img_avatar2.png"
    }

    newCard.alt = "Avatar";
    newCard.style = "width:100%";

    cardHolder.appendChild(newCard);

    let userHolder = document.createElement('div');
    userHolder.id = 'container';
    // let userHolder = document.querySelector('#container');

    const fullName = document.createElement('p');
    fullName.innerText = `${data.results[i].name.first.toUpperCase()} ${data.results[i].name.last.toUpperCase()}`
    fullName.style.fontWeight = 'bold';

    const userTitle = document.createElement('p');
    userTitle.innerText = `${data.results[i].name.title}`

    userHolder.appendChild(fullName)
    userHolder.appendChild(userTitle)
    cardHolder.appendChild(userHolder);

    document.body.appendChild(cardHolder);

    }
}