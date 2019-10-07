document.addEventListener('DOMContentLoaded', () => {
    const generatorButton = document.querySelector('#generator')
    generatorButton.addEventListener('click', cardHandler)
})

const loadUserData = async () => {
    const myURL = 'http://localhost:4000/'
    const response = await axios(myURL)
    const result = response.data.results
    return result
}

const generateRandomUser = async () => {
    let nameList = await loadUserData()
     
    const random = () => {
        let index = Math.floor((Math.random() * 9) + 1)
        return index
    } 

    let randomNum = random()
   return nameList[randomNum]
}

 const createCard = async () => {
    const myUser = await generateRandomUser()
    const myUserCard = document.querySelector('#user-card')
    const userPhoto = document.createElement('img')

    const random = () => {
        let index = Math.floor((Math.random() * 96) + 1)
        return index
    } 

    if (myUser.gender === 'female'){
        userPhoto.src = 'https://randomuser.me/api/portraits/women/' + random() + '.jpg'
    }

    else if (myUser.gender === 'male'){
        userPhoto.src = 'https://randomuser.me/api/portraits/men/' + random() + '.jpg'
    }

    myUserCard.appendChild(userPhoto)

    const gender = myUser.gender 
    const genderHeading = document.createElement('h5')
    genderHeading.innerText = gender

    const firstName = myUser.name.first
    const lastName = myUser.name.last
    const nameHeading = document.createElement('h3')
    nameHeading.innerText = firstName + ' ' + lastName

    const nationality = myUser.nat
    const nationalityHeading = document.createElement('h5')
    nationalityHeading.innerText = nationality

    myUserCard.append(userPhoto)

    const myUserInfo = document.createElement("div")
    // myUserInfo.id = 'user-info'
    myUserInfo.append(nameHeading, genderHeading, nationalityHeading)
    myUserCard.append(myUserInfo)

 }

 const cardHandler = () =>{
     const myUserCard = document.querySelector('#user-card')
     console.log(myUserCard)

    if (!myUserCard){
        createCard()
    } else {
        myUserCard.innerHTML = ""
        createCard()
    }
 }

 