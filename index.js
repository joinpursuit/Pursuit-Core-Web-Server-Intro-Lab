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
    
    console.log(data.results);
    console.log(data.results[0].gender);
    createCard(data)
}

function createCard(data) {
    let user = data
    let index = Math.floor(Math.random() *10) //generate a random number
    let img = ""
    
    if (user.results[index].gender === "female")
    {
        img = "./woman.png"
    }else{
        img = "./guy.png"
    }
    
 
    
    // this is to create the outter card
    let outterContainer = document.createElement('div')
    outterContainer.setAttribute("class", "card")
    
    //to create image tag
    let image = document.createElement('img')
    image.setAttribute("src", img)
    
    //this is for inner card
    let innerContainer = document.createElement('div')
    innerContainer.setAttribute("class", "container")
    let header1 = document.createElement("h4")
    header1.innerText = user.results[index].name.title
    let ptag = document.createElement('p')
    ptag.innerText = `${user.results[index].name.first}  ${user.results[index].name.last}`;
    document.body.appendChild(outterContainer)
    outterContainer.appendChild(image);
    outterContainer.appendChild(innerContainer)
    innerContainer.appendChild(header1)
    innerContainer.appendChild(ptag)

    //append stuff in order after your done
    
}