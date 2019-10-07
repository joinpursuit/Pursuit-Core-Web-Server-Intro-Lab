document.addEventListener("DOMContentLoaded", () => {
    let selectUsersBtn = document.querySelector("#users");
    let selectTriviaBtn = document.querySelector("#trivia");

    selectUsersBtn.addEventListener("click", async() => {
        let usersDiv = document.querySelector("#profilesContainer");
        if (usersDiv) {
            usersDiv.parentNode.removeChild(usersDiv);
        }
        let resp = await axios('http://localhost:2702').catch(err => console.log(err));
        displayUsers(resp.data.results);
    })

    selectTriviaBtn.addEventListener("click", async() => {
        let previousDiv = document.querySelector("#triviaContainer")
        if (previousDiv) {
            previousDiv.parentNode.removeChild(previousDiv);
        }

        let triviaDiv = document.createElement("div");
        triviaDiv.id = "triviaContainer";
        document.body.appendChild(triviaDiv);
    
        let newP = document.createElement("p");
        let selectMenu = document.createElement("select");
        let submitAnswerBtn = document.createElement("button");
        submitAnswerBtn.innerText = "Submit Answer";
        triviaDiv.append(newP, selectMenu, submitAnswerBtn);

        let ul = document.createElement("ul");
        triviaDiv.appendChild(ul);

        let resp = await axios('http://localhost:3107').catch(err => console.log(err));
        displayTrivia(resp.data.results, 0, triviaDiv, newP, selectMenu, submitAnswerBtn, ul);
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

const displayTrivia = (triviaArray, number, container, pTag, selectMenuTag, submitBtn, ulTag) => {
    let question = triviaArray[number].question
    pTag.innerText = question;

    selectMenuTag.innerHTML = "";
    let option = document.createElement("option");
    option.innerText = "---Select an answer---";
    
    selectMenuTag.appendChild(option);
    
    let correctAnswer = triviaArray[number].correct_answer;
    let sortedAnswers = [correctAnswer].concat(triviaArray[number].incorrect_answers)
    let usedIndexesTracker = [];
    let unsortedAnswers = [];
    for (let i = 0; i < sortedAnswers.length; i++) {
        unsortedAnswers.push(sortedAnswers[getRandomIndex(sortedAnswers.length, usedIndexesTracker)])
    }
    
    unsortedAnswers.forEach(element => {
        let newOption = document.createElement("option");
        newOption.value = element;
        newOption.innerText = element;
        selectMenuTag.appendChild(newOption);
    });
    
    submitBtn.addEventListener("click", () => {
        let nextButton = document.querySelector("#nextBtn");
        if (nextButton) {
            nextButton.parentNode.removeChild(nextButton);
        }

        let newLi = document.createElement("li")
        newLi.innerText = question + " Right answer: " + correctAnswer;

        let userAnswer = selectMenuTag.value;
        if (userAnswer === correctAnswer) {
            newLi.innerText += " Correct"
        } else {
            newLi.innerText += " Incorrect, you choose " + userAnswer;
        }
        ulTag.appendChild(newLi);

        let nextBtn = document.createElement("button");
        nextBtn.id = "nextBtn";
        nextBtn.innerText = "Next Question";
        container.appendChild(nextBtn);

        nextBtn.addEventListener("click", () => {
            number += 1;
            if (number < triviaArray.length)
            displayTrivia(triviaArray, number, container, pTag, selectMenuTag, submitBtn, ulTag)
        })
    })
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