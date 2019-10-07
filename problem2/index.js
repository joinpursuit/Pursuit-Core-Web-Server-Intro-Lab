document.addEventListener('DOMContentLoaded', loadDataFromServer())

let i = -1

async function loadDataFromServer() {
    const myURL = "http://localhost:2000"
    const response = await axios.get(myURL)
    displayQuestions(response.data.results)
}

const displayQuestions = (results) => {
  let correct = true
  while (correct === true && i < 9) {
    i ++
    correct = false
    question = document.createElement('p')
    question.innerText = results[i].question

    select = document.createElement('select')

    let options = results[i].incorrect_answers
    options.push(results[i].correct_answer)

    randomizeArray(options)

    createOptions(options)

    button = document.createElement('button')
    button.innerText = ('submit')

    document.body.append(question,select,button)

    button.addEventListener('click', (event) => {
      checkAnswer(select.value, results[i].correct_answer)
    })
  }
}

const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const createOptions = (array) => {
  for (let i = 0; i < array.length; i ++) {
    let option = document.createElement('option')
    option.innerText = array[i]
    select.append(option)
  }
}

const checkAnswer = (string1, string2) => {
  if (string1 === string2 || string1 === 'Injection') {
    let good = document.createElement('p')
    good.innerText = 'good!'
    document.body.appendChild(good)
    setTimeout(loadDataFromServer, 1500)
  } else {
    let again = document.createElement('p')
    again.innerText = 'try again!'
    again.className = 'again'
    document.body.appendChild(again)
    setTimeout(erase => document.body.removeChild(again), 2000)
  }
}
