const loadServer = async () => {
    let myData = await axios.get("http://localhost:3000");
    let response = myData.data.results
    getPeople(response)
}
document.addEventListener("DOMContentLoaded", loadServer);
const getPeople = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        createCard(current)
    }
}
const createCard = (current) => {
    let container = document.querySelector("#container");
    let card = document.createElement("div");
    let image = createImage(current);
    let name = createName(current);
        card.className = "card"
        card.append(image, name)
        container.append(card)
}
const createImage = (current) => {
    let gender = current.gender
    if(gender === "female") {
        return getFemalePic()
    } else {
        return getMalePic()
    }
}
const getFemalePic = () => {
    let image = document.createElement("img");
        image.src = "./female.jpg";
    return image
}
const getMalePic = () => {
    let image = document.createElement("img");
        image.src = "./male.jpg"
    return image
}
const createName = (current) => {
    let prefix = current.name.title.toUpperCase();
    let first = current.name.first.toUpperCase();
    let last = current.name.last.toUpperCase();
    let name = `${prefix} ${first} ${last}`
    let namePlate = document.createElement("h4");
        namePlate.innerText = name
        namePlate.className = "name"
    return namePlate
}
