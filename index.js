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

    let userHolder = document.querySelector('#container');

    for(let i = 0; i < data.results.length; i++) {
        // console.log('Count it')
    
    const fullName = document.createElement('p');
    fullName.innerText = `${data.results[i].name.first.toUpperCase()} ${data.results[i].name.last.toUpperCase()}`
    fullName.style.fontWeight = 'bold';

    const userTitle = document.createElement('p');
    userTitle.innerText = `${data.results[i].name.title}`

    userHolder.appendChild(fullName)
    userHolder.appendChild(userTitle)

    }
}