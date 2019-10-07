document.addEventListener("DOMContentLoaded", () => {
    grabServerButton().addEventListener("click", loadData)
}) 

const grabServerButton = () => {
    return document.querySelector("#serverButton")
}

const loadData = async () => {
    const url = "https://randomuser.me/api/?inc=gender,name,nat&&results=10"
    let response = await axios.get(url)
    getRandom()
    displayData(response.data)
     console.log(response.data)
}

const getRandom = () => {
    return Math.random() * (10- 1) + 1;
    
}

const displayData = (data) => {
    const titleHeader = document.createElement('h1')
    titleHeader.innerText = data.title;

    const firstName = document.createElement("h2")
    firstName.innerText = data.first;

    const lastName = document.createElement('h3')
    lastName.innerText = data.last;

    const genderP = document.createElement('p')
    genderP.innerText = data.gender;

    const nat = document.createElement("p")
    nat.innerText = data.nationality

    document.body.append(titleHeader, lastName, firstName, genderP, nat)
}