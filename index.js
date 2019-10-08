document.addEventListener('DOMContentLoaded', () => {
    getServerButton().addEventListener('click', loadDataFromServer)
})

const getServerButton = () => {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL)
    displayDataFromServer(resp.data)
}
const displayDataFromServer = (data) => {
    let randomUser = Math.floor(Math.random() * 10)
    console.log(data);
    
    let profilePic = document.createElement('img')
    const girlPicUrl = './blackGirl.png'
    const boyPicUrl = './blackGuy.jpeg'

    const profileContainer = document.createElement("div");
    profileContainer.setAttribute("class", "card");

    const profileContent = document.createElement("div");
    profileContent.setAttribute("class", "profile-data");

    
    let fullName = document.createElement('p')
    fullName.innerText = ""
    // profileContent.innerText = '';
    if (data.results[randomUser].gender === 'male') {
        profileContent.innerText = '';
        profilePic.src = boyPicUrl;
        fullName.innerText = `${data.results[randomUser].name.title} ${data.results[randomUser].name.first} ${data.results[randomUser].name.last}`;
    } else {
        profileContent.innerText = '';
        let profilePic = document.createElement('img')
        profilePic.src = girlPicUrl;
        fullName.innerText = `${data.results[randomUser].name.title} ${data.results[randomUser].name.first} ${data.results[randomUser].name.last}`;
    }
    //document.body.appendChild(profileContent)
    document.body.appendChild(profileContainer)
    profileContent.appendChild(fullName)
    profileContainer.appendChild(profilePic) 
    // profileContainer.appendChild(profileContent)
}