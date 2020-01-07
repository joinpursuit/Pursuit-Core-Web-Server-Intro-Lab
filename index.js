document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/").then(res => {
    res.data.forEach(person => {
        let container = document.querySelector('#container')
        let male_card = document.querySelector('.div')
        let female_card = document.querySelector('.div')
         let personName = person.name.first + " " + person.name.last + " " + person.gender
        let h3 = document.createElement("h3")
         let li = document.createElement("li")

        h3.innerText = personName
        debugger
        document.body.appendChild(h3)


    })
})

})
