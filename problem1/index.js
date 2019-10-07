document.addEventListener('DOMContentLoaded', loadDataFromServer())

async function loadDataFromServer() {
    const myURL = "http://localhost:2500"
    const response = await axios.get(myURL)
    displayCards(response.data)
}

const displayCards = (data) => {
  data.results.forEach(data => {
    let card = document.createElement('div')
    card.className = 'card'

    let img = document.createElement('img')
    img.src = 'profile-placeholder.gif'

    let container = document.createElement('div')
    container.className = 'container'

    let name = document.createElement('h1')
    name.innerText = (`${data.name.title} ${data.name.first} ${data.name.last}`)

    let nat = document.createElement('h3')
    nat.innerText = data.nat

    document.body.appendChild(card)

    card.append(img,container)

    container.append(name, nat)
  })
}
