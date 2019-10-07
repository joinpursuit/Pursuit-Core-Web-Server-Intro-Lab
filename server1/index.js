document.addEventListener('DOMContentLoaded', () => {
    getServerButton().addEventListener('click', loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton")
}

async function loadDataFromServer(){
    const url = "http://localhost:3000"
    const resp = await axios.get(url)

    displayData(resp.data);
}

function displayData(data) {
    for(let i = 0; i <data.results.length; i++){
        const name = document.createElement('p')
        if(data.results[i].gender === 'male'){
        const img = document.createElement('img')
        img.src = "https://www.w3schools.com/howto/img_avatar.png"
        let nameHeader = data.results[i].name
        name.innerText = `${nameHeader.title}. ${nameHeader.first} ${nameHeader.last}`
        document.body.append(name)
        document.body.append(img)
    }
    else if (data.results[i].gender === 'female'){
        const img = document.createElement('img')
        img.src = "https://www.w3schools.com/howto/img_avatar2.png"
        let nameHeader = data.results[i].name
        name.innerText = `${nameHeader.title}. ${nameHeader.first} ${nameHeader.last}`
        document.body.append(name)
        document.body.append(img)
        
    }
    }
    
    
console.log(data)
console.log(name)
 

}