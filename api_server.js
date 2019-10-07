document.addEventListener("DOMContentLoaded", () => { //loading the DOM and listening for the grabUserButton function to 
    grabUserButton().addEventListener("click", loadData)
})

const grabUserButton = () => {
    return document.querySelector("#getUser") // getting the button by its id
}

const loadData = async () => {
    const url = "https://randomuser.me/api/?inc=gender,name,nat&&results=10"
    let response = await axios.get(url) // fetching the data with the list of users and the required info.
    displayData(response.data.results)
    

}

const displayData = (data) => { //displaying the data that we requested from the server. 
        
        let mainDiv = document.querySelector(".main-div")
        
        for (let i = 0; i < data.length; i++) {

            let userTitle = document.querySelector("#title")
            userTitle.innertext = data.title;
            
            let userFirstname = document.querySelector("#first")
            userFirstname.innertext = data.first;

            let userLastname = document.querySelector("#last")
            userLastname.innertext = data.last;

            let userGender = document.querySelector("#gender")
            userGender.innertext = data.gender;

            let userNationality = document.querySelector("#nationality")
            userNationality.innertext = data.nationality;

            mainDiv.append(userTitle, userFirstname, userLastname, userGender, userNationality)

        }
}