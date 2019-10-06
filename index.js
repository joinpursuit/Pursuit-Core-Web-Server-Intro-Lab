document.addEventListener('DOMContentLoaded', () =>{
    getServerButton().addEventListener('click', loadDataFromServer)
})


function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000"
    const resp = await axios.get(myURL)    
    displayResponseFromServer(resp.data.results)
// console.log(resp.data.results)
}

function displayResponseFromServer(data) {
    console.log(data);

    let malePic = "https://www.colwords.com/assets/home/images/profile_img.png";
    let femalePic = "https://cricclubs.com/documentsRep/profilePics/default-female-Image.jpg";
    
    let bigDiv = document.createElement("div");
    document.body.append(bigDiv);
    bigDiv.id = "bigDiv"
    for (let person of data) {
        console.log("person", person.gender)
        let card = document.createElement("div");
        card.className = "card";
        
        let profilePic = document.createElement("img");
        if(person.gender === "female") {
            profilePic.src = femalePic;
        } else {
            profilePic.src = malePic;
        }

        let nameDiv = document.createElement("div");
       

        let name = document.createElement("p");
        name.innerText = `${person.name.first} ${person.name.last}`;
        nameDiv.append(name);

        card.append(profilePic, name);
        
        bigDiv.append(card);
        
    }
}