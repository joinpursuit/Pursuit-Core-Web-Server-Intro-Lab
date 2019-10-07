document.addEventListener('DOMContentLoaded', () => {
    triviaButton().addEventListener('click', loadDataFromServer)
})

function triviaButton(){
    return document.querySelector("#triviaButton")
}

async function loadDataFromServer() {
    const url = "http://localhost:3000"
    const resp = await axios.get(url)

    displayData(resp.data);
}

function displayData(data){
    console.log(data)
for(let i = 0; i <data.results.length; i++){
        results = data.results[i]

        const category = document.querySelector('h2')
        category.innerText = `Category: ${results.category}`

        const difficulty = document.querySelector('h3')
        difficulty.innerText = `Difficulty: ${results.difficulty}`

        const question = document.querySelector('#para')
        question.innerText = `${results.question}`

    }

}