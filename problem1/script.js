document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL)    
    displayResponseFromServer(resp.data)
}

function displayResponseFromServer(resp) {
    console.log(resp)
    let display = document.querySelector('#display_info');
    let users = resp.results//[Math.floor(Math.random() * 10)];
    while (display.firstChild) display.removeChild(display.firstChild)
    users.forEach(user => addUserToUI(user))
    
}

function addUserToUI(user) {
    console.log('asdfasdfasdf', user);
    let display = document.querySelector('#display_info');
    let gender = `Gender: ${user.gender}`;
    let fullName = `${user.name.title}, ${user.name.first} ${user.name.last}`;
    let nat = `Nationality: ${user.nat}`;
    let nameTag = document.createElement('h4')
    let boldName = document.createElement('strong')
    let info = document.createElement('p')
    let card = document.createElement('div')
    let container = document.createElement('div')
    let img = document.createElement('img')
    img.src = `https://www.w3schools.com/howto/img_avatar${user.gender === 'male' ? '' : '2'}.png` 
    boldName.innerText = fullName;
    nameTag.appendChild(boldName);
    info.innerText = `${gender}\n${nat}`;
    container.append(nameTag, info);
    card.append(img, container);
    display.appendChild(card);
}