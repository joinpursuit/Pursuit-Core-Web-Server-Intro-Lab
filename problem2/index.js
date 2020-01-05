document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector("#container");
    axios.get("http://localhost:3000").then((res) => {
        res.data.forEach(async (question) => {
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
        })
    })
})