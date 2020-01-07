document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("button")
    let select = document.querySelector("select")
    let p = document.querySelector("p")

    axios.get("http://localhost:3000/data").then(res => {
        let trivia = res.data.results
        let rdm = Math.floor(Math.random() * trivia.length)
        let answers = []
        answers.push(trivia[rdm])

        p.innerText = trivia[rdm].question


    })
})