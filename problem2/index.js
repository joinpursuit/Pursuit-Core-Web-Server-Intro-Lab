document.addEventListener("DOMContentLoaded", () => {
    getServerButton().addEventListener("click", loadDataFromServer)
})

function getServerButton() {
    return document.querySelector("#serverButton");
}

async function loadDataFromServer() {
    const myURL = "http://localhost:3000";
    const resp = await axios.get(myURL);
    displayDataFromServer(resp.data);
}

function displayDataFromServer(data) {
    //LOGIC
    // let options = [];
    // console.log(data.results[0].question);
    // options.push(data.results[0].correct_answer)
    // for(let i in data.results[0].incorrect_answers) {
    //     options.push(i);
    // }



    // if(options.indexOf(i) === data[0].correct_answer) {
    //     console.log("correct");
    // }

    //

//CODE FOR 1 QUESTION
    let p = document.createElement("p");
    p.innerText = data.results[0].question;
    document.body.appendChild(p);

    let select = document.createElement("select");
    select.id = "selectList"
    document.body.appendChild(select);
    let selectList = document.querySelector("#selectList");
    let randomNumber = (Math.floor(Math.random() * 4)); //returns a number from 0 to 3
    let i = 0;
    for (let j = 0; j < 4; j++) {
        if(i === randomNumber) {
            let answerOption = document.createElement("option");
            answerOption.value = data.results[0].correct_answer;
            answerOption.text = data.results[0].correct_answer;
            selectList.appendChild(answerOption);
            i++;
            j--;
        } else {
            let answerOption = document.createElement("option");
            answerOption.value = data.results[j].incorrect_answers[j];
            answerOption.text = data.results[j].incorrect_answers[j];
            selectList.appendChild(answerOption);
        }
        i++;
    }
    selectList.removeChild(selectList.lastChild);

}
    