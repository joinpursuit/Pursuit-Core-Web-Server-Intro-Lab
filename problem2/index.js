document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector("#problem2");

    const shuffleArr = (arr) => {
        arr.sort(() => Math.random() - 0.5);
    }

    const checkAnswer = (data, i) => {
        let form = document.querySelector("form");
        let select = document.querySelector("select");
        form.addEventListener("submit", (e) => {
            select.value === data[i].correct_answer ? alert("You're correct!") : alert("You're wrong!");   
            i++;
            getAnswer(data, i);
        })
    }

    const getAnswer = (data, i = 0) => {
        if(i === data.length) return;
        div.innerHTML = "";

        let p = document.createElement("p");
        p.innerText = data[i].question;
        div.appendChild(p);

        let form = document.createElement("form");
        let select = document.createElement("select");
        let answers = [];
        
        answers.push(data[i].correct_answer);
        data[i].incorrect_answers.forEach(incorrectAnswer => {
            answers.push(incorrectAnswer);
        })
        shuffleArr(answers);

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

        checkAnswer(data, i);
    }

    axios.get("http://localhost:3000").then(res => {
        let triviaData = res.data;
        getAnswer(triviaData);
    })
})