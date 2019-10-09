document.addEventListener('DOMContentLoaded', () => {
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000";
    const resp = await axios.get(myURL);    
    displayDataFromServer(resp.data);
}

function displayDataFromServer(data) {

    const container = document.getElementById('content');
    data.results.forEach((result, i) => {
    const card = document.createElement('div');

    const content = `
        <div style="border-style: solid; border-width: 1%; width: 15%;">
        <div><img src="https://myspace.com/common/images/user.png" style="height: 100%; width: 100%;"></div>

        <div><h4>${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</h4></div>
        </div>
    `;
    container.innerHTML += content;
})
}