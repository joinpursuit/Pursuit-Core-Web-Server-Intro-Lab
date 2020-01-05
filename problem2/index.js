document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector("#container");

    const answer = (data, i) => {
        let form = document.querySelector("form");
        let select = document.querySelector("select");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(select.value === data[i].correct_answer) {
                alert("CORRECT!");
            } else {
                alert("YOU SUCK!");
            }
            i += 1;
            awaitAnswer(data, i);
        })
    }

    const awaitAnswer = (data, i = 0) => {
        if(i === data.length) {
            return;
        }
        let question = data[i];
        container.innerHTML = "";

        let p = document.createElement("p");
        p.innerText = question.question;
        container.appendChild(p);

        let select = document.createElement("select");
        let answers = [];
        answers.push(question.correct_answer);

        let incorrect = question.incorrect_answers;
        incorrect.forEach(incAns => {
            if(Math.floor(Math.random() * 2)) {
                answers.push(incAns);
            } else {
                answers.unshift(incAns);
            }
        })
        
        answers.forEach(answer => {
            let option = document.createElement("option");
            option.innerText = answer;
            option.value = answer;
            select.appendChild(option);
        })

        let input = document.createElement("input");
        input.type = "submit";

        let form = document.createElement("form");
        form.appendChild(select);
        form.appendChild(input);

        container.appendChild(form);

        answer(data, i);
    }

    axios.get("http://localhost:3000").then( async (res) => {
        let data = res.data;
        awaitAnswer(data);
    }).catch(err => console.log(err))
})