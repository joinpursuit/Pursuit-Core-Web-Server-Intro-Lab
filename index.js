let questionNumber = 0;

document.addEventListener("DOMContentLoaded", () => {
    let selectUsersBtn = document.querySelector("#users");
    let selectTriviaBtn = document.querySelector("#trivia");

    let usersDiv = document.querySelector("#profilesContainer");
    selectUsersBtn.addEventListener("click", async() => {
        if (usersDiv) {
            usersDiv.parentNode.removeChild(usersDiv);
        }
        let resp = await axios('http://localhost:2702').catch(err => console.log(err));
        displayUsers(resp.data.results);
    })

    let triviaDiv = document.querySelector("#triviaContainer")
    let newP = document.createElement("p");
    let selectMenu = document.createElement("select");
    let submitAnswerBtn = document.createElement("button");
    submitAnswerBtn.innerText = "Submit Answer";
    let ul = document.createElement("ul");
    let nextQuestionBtn = document.createElement("button");
    nextQuestionBtn.innerText = "Next Question";
    
    let triviaQuestions;

    selectTriviaBtn.addEventListener("click", async() => {
        questionNumber = 0;
        if (triviaDiv) {
            triviaDiv.innerHTML = "";
            console.log(triviaDiv) 
        } else {
            triviaDiv = document.createElement("div");
            triviaDiv.id = "triviaContainer";
            document.body.appendChild(triviaDiv);
        }
        newP.innerText = "";
        selectMenu.innerHTML = "";
        ul.innerHTML = "";
        triviaDiv.append(newP, selectMenu, submitAnswerBtn, ul, nextQuestionBtn);

        nextQuestionBtn.style.visibility = "hidden";

        let resp = await axios('http://localhost:3107').catch(err => console.log(err));
        triviaQuestions = resp.data.results;

        displayTrivia(triviaQuestions, newP, selectMenu, submitAnswerBtn, ul, nextQuestionBtn);
    })

    submitAnswerBtn.addEventListener("click", () => {
        let question = triviaQuestions[questionNumber].question;
        let correctAnswer = triviaQuestions[questionNumber].correct_answer;
        let userAnswer = selectMenu.value;

        nextQuestionBtn.style.visibility = "visible";

        let newLi = document.createElement("li")
        newLi.innerText = question + " Right answer: " + correctAnswer;

        if (userAnswer !== "---Select an answer---") {
            if (userAnswer === correctAnswer) {
                newLi.innerText += " Correct"
            } else {
                newLi.innerText += " Incorrect, you choose " + userAnswer;
            }
            ul.appendChild(newLi);
        }
    })

    nextQuestionBtn.addEventListener("click", () => {
        nextQuestionBtn.style.visibility = "hidden";
        questionNumber += 1;
        if (questionNumber < triviaQuestions.length) {
            displayTrivia(triviaQuestions, newP, selectMenu, submitAnswerBtn, ul, nextQuestionBtn);
        }
    })
})

const displayUsers = (usersArray) => {
    let mPic = "https://www.w3schools.com/howto/img_avatar.png"
    let fPic = "https://www.w3schools.com/howto/img_avatar2.png"
    let usersDiv = document.createElement("div");
    usersDiv.id = "profilesContainer"
    document.body.appendChild(usersDiv);

    usersArray.forEach(element => {
        let individualDiv = document.createElement("div");
        individualDiv.className = "profile"
        usersDiv.appendChild(individualDiv);
        let userImage = document.createElement("img");
        if (element.gender === "male") {
            userImage.src = mPic;
        } else {
            userImage.src = fPic;
        }
        let userNameH3 = document.createElement("h3");
        userNameH3.innerText = element.name.first + " " + element.name.last 
        individualDiv.append(userImage, userNameH3);
    });
}

const displayTrivia = (triviaArray, pTag, selectMenuTag, submitBtn, ulTag, nextQBtn) => {
    let question = triviaArray[questionNumber].question;
    let usedIndexesTracker = [];
    let correctAnswer = triviaArray[questionNumber].correct_answer;
    let sortedAnswers = [correctAnswer].concat(triviaArray[questionNumber].incorrect_answers);
    let unsortedAnswers = [];
    
    for (let i = 0; i < sortedAnswers.length; i++) {
        unsortedAnswers.push(sortedAnswers[getRandomIndex(sortedAnswers.length, usedIndexesTracker)])
    }

    pTag.innerText = question;

    selectMenuTag.innerHTML = "";
    let option = document.createElement("option");
    option.innerText = "---Select an answer---";
    selectMenuTag.appendChild(option);
    
    unsortedAnswers.forEach(element => {
        let newOption = document.createElement("option");
        newOption.value = element;
        newOption.innerText = element;
        selectMenuTag.appendChild(newOption);
    });
    
}


const getRandomIndex = (range, tracker) => {
    let randomIndex = Math.floor(Math.random() * range);
    if (!tracker.includes(randomIndex)) {
        tracker.push(randomIndex);
        return randomIndex
    } else {
        return getRandomIndex(range, tracker)
    }
}
