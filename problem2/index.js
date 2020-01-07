document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector("#problem2");

    const checkAnswer = (data, i) => {
        let form = document.querySelector("form");

    }

    const getAnswer = (data, i = 0) => {
        let p = document.createElement("p");
        p.innerText = data[i].question;
        div.appendChild(p);

        let form = document.createElement("form");
        let select = document.createElement("select");
        let answers = [];
        
        answers.push(data[i].correct_answer);

        data[i].incorrect_answers.forEach(incorrectAnswer => {
            Math.floor(Math.random() * 2) ? answers.push(incorrectAnswer) : answers.unshift(incorrectAnswer);
        })

        answers.forEach(answer => {
            let option = document.createElement('option');
            option.innerText = answer;
            select.appendChild(option);
        })

        let input = document.createElement('input');
        input.type = "submit";

        form.appendChild(select);
        form.appendChild(input);

        div.appendChild(form);
        
    }

    axios.get("http://localhost:3000").then(res => {
        let triviaData = res.data;
        getAnswer(triviaData);
    })
})