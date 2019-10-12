document.addEventListener('DOMContentLoaded', () =>{
    loadDataFromServer();
})


async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    const resp = await axios.get(myURL) 
    displayResponseFromServer(resp.data)
}


function displayResponseFromServer(data) {   
    let resultsArr = data.results 
    displayUserInfo(resultsArr)
    
}


const displayUserInfo = (arr) => {
    arr.forEach(element => {
        let nat = element.nat
    
        let title = element.name.title
        let capTitle = title[0].toUpperCase() + title.slice(1);
    
        let first = element.name.first 
        let capFirst = first[0].toUpperCase() + first.slice(1);
    
        let last = element.name.last
        let capLast = last[0].toUpperCase() + last.slice(1);
    
    
        let userInfo = document.createElement('h4')
        let userName = `${capTitle}. ${capFirst} ${capLast}, ${nat}`
        userInfo.innerText = userName
    
        userDiv = document.createElement('div')
        userDiv.classList.add('card');
      
        displayUserPhoto(element);
        userDiv.append(userInfo)
    
        let body = document.querySelector('body')
        body.append(userDiv)
        })
}


const displayUserPhoto = (element) => {
    let gender = element.gender
    
    if (gender === "male") {

        let maleImage = document.createElement('img')
        maleImage.src = "https://www.w3schools.com/w3css/img_avatar3.png"
        userDiv.append(maleImage)
       } else {
        let femaleImage = document.createElement('img')
        femaleImage.src = "https://www.w3schools.com/howto/img_avatar2.png"
        userDiv.append(femaleImage)
       }
}

