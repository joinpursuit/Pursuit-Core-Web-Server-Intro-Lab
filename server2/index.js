document.addEventListener('DOMContentLoaded', () => {
    triviaButton().addEventListener('click', loadDataFromServer)

})

 let empArray = [];

function triviaButton(){
    return document.querySelector("#triviaButton")
}

async function loadDataFromServer() {
    const url = "http://localhost:3000"
    const resp = await axios.get(url)

    displayData(resp.data);
    
}

function displayData(data){
    // console.log(data)
for(let i = 0; i < data.results.length; i++){

        results = data.results[i]

    const triviaHeading = document.querySelector("#mainContainer")
        const category = document.createElement('h2')
        category.innerText = `Category: ${results.category}`
        
        const difficulty = document.createElement('h3')
        difficulty.innerText = `Difficulty: ${results.difficulty}`

        const question = document.createElement('para')
        question.innerText = `Question: ${results.question}`
        
    // const selectBox = document.querySelector("#selectButton")

        const select = document.querySelector('select')
            // select.id = "answers"
            // select.innerText = " "

        const selectAns = document.createElement('option')
            selectAns.id = "optionItem"
            // selectAns.innerText = "Select Answer"

        triviaHeading.appendChild(category)
        triviaHeading.appendChild(difficulty)
        triviaHeading.appendChild(question)
        triviaHeading.appendChild(select)
        select.appendChild(selectAns)

     let resetParagraph = document.querySelector("#answerParagraph")
         let wrongAnswerParagraph = document.querySelector("#wrongAnswerParagraph")
         if(resetParagraph || wrongAnswerParagraph){
             resetParagraph.innerText = ""
        //      wrongAnswerParagraph.innerText = ""
         }
        }    
        // select.replaceChild(selectAns, select)
        arr = results
        // console.log(data)
        selectButton(data)
}


  function selectButton (arr) {
        
          let orderedAnswerArray = [...results.incorrect_answers, results.correct_answer];
         
        console.log(orderedAnswerArray)
        
         let output = randomizeArr(orderedAnswerArray)
        
        console.log(output)
    
    //  console.log(results.incorrect_answers)
         let select = document.querySelector("#answers")
          select.innerText = " "
    

    
         let selectAns = document.createElement("option")
         selectAns.innerText = "Select Answer"
         select.appendChild(selectAns)
        
         for(let i = 0;  i < output.length; i++) { 
         const newSelect = document.createElement("option");
         const answerChoice = output[i]
             newSelect.innerText = answerChoice;
    //             console.log(output[i])
             newSelect.id = "optionItem" 
    
             select.appendChild(newSelect)

     }
     
      }
     
    
     function checkAnswer() {
    let option = document.querySelector("#answers")
          console.log(option.value)
         console.log(arr)
         if(option.value === arr.correct_answer){
             let para = document.createElement('p')
             para.setAttribute("id", "answerParagraph")
             para.innerText = "This is the correct answer"
    
             document.body.appendChild(para)
          loadDataFromServer()
         }
         else{
             let checkWrongAnswer = document.querySelector("#wrongAnswerParagraph")
             if(checkWrongAnswer){
                 checkWrongAnswer.innerText = "Try Again"
             document.body.appendChild(checkWrongAnswer)
    
             }else{
                 let para = document.createElement('p')
                 para.innerText = "Try Again"
                 para.setAttribute("id", "wrongAnswerParagraph")
             document.body.appendChild(para)
    
             }
         }
      }
    
      function randomizeArr(empArr){
        const newArray = []
          let randomIndex;
    
         while(empArr.length > 0){
             randomIndex = Math.floor(Math.random() * (empArr.length -1))
            
             const arrayItem = empArr[randomIndex];
    
             newArray.push(arrayItem)
    
             empArr.splice(randomIndex, 1)
        
         }
         console.log("Showing randomized array below : " )
         console.log(newArray)
        
         return newArray;
      }

  