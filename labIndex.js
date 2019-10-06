document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3050/"
    const resp = await axios.get(myURL)    
    displayDataFromServer(resp.data)
}

function displayDataFromServer(data) {
    console.log(data.results[].name);

}