document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/").then(res => {
    res.data.forEach(person => {
        let container = document.querySelector('#container')
        let peopleDiv = document.createElement('div')
         let personName = person.name.first + " " + person.name.last + " " + person.gender
        
        
        
    })   
})

})