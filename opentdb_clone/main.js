document.addEventListener('DOMContentLoaded', async () => {
    const triviaQuestion = await getTriviaData();
    displayQuestion(triviaQuestion);
})

const getTriviaData = async () => {
    const url = 'http://localhost:4000';
    const response = await axios.get(url);
    return response.data.results;
}

const displayQuestion = (data) => {
    const num = randomNumber(data.length);
    const chosenQuestion = data[num];
    // console.log('Current Question => ', chosenQuestion);
    const answerChoices = chosenQuestion.incorrect_answers;
    answerChoices.push(chosenQuestion.correct_answer);

    const options = randomizeOptions(answerChoices);

    const p = createElement('p');
    const select = createElement('select');
    const button = createElement('button');

    button.setAttribute('id', 'submit-btn');
    select.setAttribute('data-answer', `${chosenQuestion.correct_answer}`);

    p.innerText = chosenQuestion.question;
    options.forEach(ele => select.appendChild(ele));
    console.dir(select);

    button.innerText = 'Submit';
    button.addEventListener('click', checkAnswer);

    document.querySelector('#question').appendChild(p);
    document.querySelector('#answers-box').appendChild(select);
    document.querySelector('#question-container').appendChild(button);
}

const createElement = (tag) => document.createElement(tag);

const randomNumber = (length) => Math.floor(Math.random() * length);

const randomizeOptions = (choices) => {
    let optionArr = [];
    for (let i = 0; i < 4; i++) {
        // console.log('Choices: ', choices);
        const num = randomNumber(choices.length);
        const luckyOption = choices.splice(num, 1);
        const option = createElement('option');
        option.innerText = luckyOption;
        optionArr.push(option);
    }
    return optionArr;
}

const checkAnswer = () => {
    const select = document.querySelector('select');
    const chosen = select.selectedOptions[0].innerText;
    const answer = select.dataset.answer;
    
    const h3 = createElement('h3');
    const button = createElement('button');
    button.innerText = 'Next Question';
    button.addEventListener('click', () => location.reload(true));

    if (chosen === answer) {
        h3.innerText = 'Correct!';
        h3.style.color = 'green';
    } else {
        h3.innerText = `Wrong! \nCorrect Answer is: ${answer}`;
        h3.style.color = 'red';
    }
    document.body.appendChild(h3);
    document.body.appendChild(button);
    document.querySelector('#submit-btn').removeEventListener('click', checkAnswer);
}