// Joseph P. Pasaoa
// Web Server Intro Lab: Trivia
//

/* HELPERS */
const log = console.log;


const getServerData = async () => {
  const serverUrl = 'http://localhost:3020/';
  const resp = await axios.get(serverUrl);
  log('data: ', resp.data);
  log('resp: ', resp);
  return resp.data.results;
}

/* POSTDOM Execs */
document.addEventListener("DOMContentLoaded", async () => {

  let questions = await getServerData();
  let user = {
    qNum: 0,
    numRight: 0,
    numWrong: 0
  };

  const showQuestion = (quesObj) => {
    let stage = document.querySelector('#stage');
  
    let makingQuestion = document.createElement('h2');
      makingQuestion.innerText = quesObj.question;
    stage.appendChild(makingQuestion);
    let makingForm = document.createElement('form');
      makingForm.id = "answers";
      for (let wrongAns of quesObj.incorrect_answers) {
        let answerDiv = document.createElement('div');
          answerDiv.className = 'answer';
          answerDiv.innerHTML = `<input type="radio" name="answer" value="880808B808" /> ${wrongAns}`
        makingForm.appendChild(answerDiv);
      }
      let rightAnswerDiv = document.createElement('div');
        rightAnswerDiv.className = 'answer';
        rightAnswerDiv.innerHTML = `<input type="radio" name="answer" value="8808088B08" /> ${quesObj.correct_answer}`;
        let randomIdx = Math.floor(Math.random() * 4);
        if (randomIdx === 4) {
          randomIdx = null;
        }
      makingForm.insertBefore(rightAnswerDiv, makingForm.childNodes[randomIdx]);
      makingForm.addEventListener('click', (e) => {
          if (e.target.className === 'answer') {
            e.target.firstChild.checked = true;
          }
      });
      document.addEventListener('keydown', submitOnEnter);
    stage.appendChild(makingForm);
  }

  const processAnswer = () => {
    if (document.querySelector('input[name="answer"]:checked')) {
      let userAnswer = document.querySelector('input[name="answer"]:checked').value;
      let marquee = document.querySelector('#marquee');
      if (userAnswer === '8808088B08') { // CORRECT ANSWER CHOSEN
        user.numRight += 1;
        if (user.qNum === 9) {
          marquee.innerHTML = `<strong><b>RIGHT! 10 Questions Completed!</b>`;
        } else {
          marquee.innerHTML = '<strong><b>RIGHT!</b></strong> Next question: ';
        }
        document.querySelector('#wordRight').setAttribute("style", "color: greenyellow;");
        document.querySelector('#wordWrong').setAttribute("style", "color: #000;");
      } else {
        user.numWrong += 1;
        let correct = document.querySelector('input[value="8808088B08"]').parentElement.innerText.trim();
        if (user.qNum === 9) {
          marquee.innerHTML = `<strong><b>WRONG!</b>The correct answer was:</strong><em>${correct}</em>`;
        } else {
          marquee.innerHTML = `<strong><b>WRONG!</b>The correct answer was:</strong><em>${correct}</em>Next question: `;
        }
        setTimeout(() => {
            document.querySelector('#marquee').querySelector('em').setAttribute("style", "color: blue;");
        }, 0);
        document.querySelector('#wordRight').setAttribute("style", "color: #000;");
        document.querySelector('#wordWrong').setAttribute("style", "color: red;");
      }
      user.qNum += 1;
      refreshScoreboard();
      clearStage();
      if (user.qNum === 10) {
        document.querySelector('p').setAttribute("style", "display: none;");
        document.querySelector('button').setAttribute("style", "display: none;");
        let stage = document.querySelector('#stage');
        let judgement = 'Needs work.';
        if (user.numRight === 10) {
          judgement = 'Perfect!!!';
        } else if (user.numRight > 7) {
          judgement = 'Great job!';
        } else if (user.numRight > 5) {
          judgement = 'Not bad!';
        }
        let scoreHTML = `<h3>${judgement}</h3><em style="color: honeydew;">Your final score is</em><br /><h4>`;
        scoreHTML += `${user.numRight} right</h4><h4>${user.numWrong} wrong</h4>`;
        stage.innerHTML += scoreHTML;
      } else {
        showQuestion(questions[user.qNum]);
      }
    }
  }

  const submitOnEnter = (event) => {
    if (event.keyCode === 13) { // 13 is enter
      processAnswer();
    }
  }

  const refreshScoreboard = () => {
    document.querySelector('#numRight').innerText = user.numRight;
    document.querySelector('#numWrong').innerText = user.numWrong;
  }

  const clearStage = () => {
    let stage = document.querySelector('#stage');
    while (stage.firstChild) {
      stage.removeChild(stage.lastChild);
    }

    document.removeEventListener("keydown", submitOnEnter);
  }


  // EXECUTE INITIAL QUESTION //
  showQuestion(questions[user.qNum]);

  document.querySelector('button').addEventListener("click", (e) => {
      e.preventDefault();
      processAnswer();
  })

});

