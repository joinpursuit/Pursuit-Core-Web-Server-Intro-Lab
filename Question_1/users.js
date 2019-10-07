document.addEventListener('DOMContentLoaded', () => {
    getServerButton().addEventListener('click', loadDataFromServer);
})

function getServerButton() {
    return document.querySelector("#serverButton");
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL);
    displayDataFromServer(resp.data);
}

function displayDataFromServer(data) {
    let randomNum = Math.floor(Math.random() * data.results.length)

    let maleCard = document.querySelector('#male-card');
    const maleName = document.createElement('h3');
    let maleContainer = document.querySelector('#male-container');

    let femaleCard = document.querySelector('#female-card');
    const femaleName = document.createElement('h3');
    let femaleContainer = document.querySelector('#female-container');

    maleContainer.innerText = '';
    femaleContainer.innerText = '';

    if (data.results[randomNum].gender === 'male') {
        maleName.innerText = `${data.results[randomNum].name.first} ${data.results[randomNum].name.last}`;
        maleCard.style.visibility = 'visible';
        femaleCard.style.visibility = 'hidden';
        maleContainer.appendChild(maleName);
    } else {
        femaleName.innerText = `${data.results[randomNum].name.first} ${data.results[randomNum].name.last}`;
        femaleCard.style.visibility = 'visible';
        maleCard.style.visibility = 'hidden';
        femaleContainer.appendChild(femaleName);
    }

}