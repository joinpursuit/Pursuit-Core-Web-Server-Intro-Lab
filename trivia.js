let url = 'http://localhost:3000';
let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', async () => {
	let arrayOfQuestions = await getQuestions();
	loadNewQuestion(arrayOfQuestions[currentQuestion]);
	let button = document.querySelector('button');

	button.addEventListener('click', () => {
		let select = document.querySelector('select');
		let feedbackBox = document.querySelector('.feedback');
		console.log(select.options[select.selectedIndex].text);
		console.log(arrayOfQuestions[currentQuestion].correct_answer);
		if(select.options[select.selectedIndex].text === arrayOfQuestions[currentQuestion].correct_answer){
			feedbackBox.innerText = 'GREAT JOB! You got that answer right';
		}
		else{
			feedbackBox.innerText ='BOOOOOOOO!!!! You got that answer wrong study more lulz.';
		}
		currentQuestion++;
		if(currentQuestion > 9){
			while(document.body.firstChild){
				document.body.removeChild(document.body.firstChild);
			}
			let victory = document.createElement('h1');
			victory.innerText = 'You are done!';
			document.body.appendChild(victory);
		}
		else{
			clearQuestion();
			loadNewQuestion(arrayOfQuestions[currentQuestion]);
		}
	})
	

})

async function getQuestions(){
	let response = await axios.get(url);
	let arrayOfQuestions = response.data.results;
	return arrayOfQuestions;
}

function loadNewQuestion(question){
	let mainBody = document.querySelector('.main-div');
	let p = document.createElement('p');
	let select = document.createElement('select');
	p.innerText = question.question;
	let tempArr = [];
	tempArr.push(question.correct_answer);
	for(let i = 0; i < question.incorrect_answers.length; i++){
		tempArr.push(question.incorrect_answers[i]);
	}
	shuffle(tempArr);
	for(let i = 0; i < tempArr.length; i++){
		let option = document.createElement('option');
		option.text = tempArr[i];
		select.appendChild(option);
	}
	mainBody.appendChild(p);
	mainBody.appendChild(select);
}



function clearQuestion(){
	let mainBody = document.querySelector('.main-div');
	let child = mainBody.firstChild;
	while(child){
		mainBody.removeChild(child);
		child = mainBody.firstChild;
	};
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}