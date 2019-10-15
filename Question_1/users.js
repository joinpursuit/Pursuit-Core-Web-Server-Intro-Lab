document.addEventListener('DOMContentLoaded', () => {
    serverButtonListener()
})

//Function that sets up an event listener when the button is pressed
function serverButtonListener() {
    let button = document.querySelector("#serverButton");
    button.addEventListener('click', loadDataFromServer);
}

//Function that gets info from server that contains an object of users
async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL);
    displayDataFromServer(resp.data);
}

//Function to display all data for random user
function displayDataFromServer(data) {
    let randomNum = Math.floor(Math.random() * data.results.length)
    showPicture(data, randomNum);
    showName(data, randomNum);
}

//Function to display the image of the user
const showPicture = (data, num) => {
    let picture = document.querySelector('img');
    picture.style.visibility = 'visible';
    let card = document.querySelector('#card');
    if (data.results[num].gender === 'male') {
        picture.src = 'male.png'
    } else {
        picture.src = 'female.png';
    }
    card.appendChild(picture)
}

//Function to display the name of the user
const showName = (data, num) => {
    let name = document.querySelector('p');
    name.style.visibility = 'visible';
    name.innerText = `${data.results[num].name.title} ${data.results[num].name.first} ${data.results[num].name.last}`
}