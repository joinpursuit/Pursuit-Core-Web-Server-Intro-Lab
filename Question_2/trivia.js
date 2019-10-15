document.addEventListener('DOMContentLoaded', () => {

    let getQs = document.querySelector('#server-button');
    getQs.addEventListener('click', getTrivia);
})

async function loadDataFromServer() {
    const myURL = "http://localhost:3000/"
    let p1 = `https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple`;
    const resp = await axios.get(p1)     
    getTrivia(resp.data)
}

const getTrivia = (data) => {
    console.log(data)
    // let first = Math.floor(Math.random() * (810 - 1) + 1);
    
    // let div = document.querySelector('.data');

    //load data from pokeAPI
   
        // let data = response.data;
        // try {
        //     let pokemon1 = response.data;
        //     let data = document.querySelector('#pokeCard1');

        //     if (!data) {
        //         //create the pokeCard
        //         let pokeCard1 = document.createElement('div');
        //         pokeCard1.setAttribute('id', 'pokeCard1');
        //         div.appendChild(pokeCard1);

        //         //change background color of pokeCard based on type
        //         let type = pokemon1.types[0].type.name;
        //         pokeCard1.style.backgroundColor = colorTypes[type];

        //         //create element for pokemon type
        //         let typeName = document.createElement('h3');
        //         typeName.innerText = `${pokemon1.types[0].type.name} `;
        //         typeName.setAttribute('class', 'type1');
        //         pokeCard1.appendChild(typeName);

        //         //create element for pokemon name
        //         let name1 = document.createElement('h2');
        //         name1.innerText = pokemon1.name;
        //         name1.setAttribute('id', 'name1');
        //         pokeCard1.appendChild(name1);

        //         //create element for pokemon stats (HP)
        //         let hp1 = document.createElement('p');
        //         hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
        //         hp1.setAttribute('id', 'hp1');
        //         pokeCard1.appendChild(hp1);

        //         //create element for pokemon picture
        //         pic1.src = `${pokemon1.sprites.front_shiny}`;
        //         pokeCard1.appendChild(pic1);
        //         let moves = pokemon1.moves;

        //         //loop for 4 pokemon moves and power points (PP)
        //         for (i = 0; i < 4; i++) {
        //             let move = document.createElement('p');
        //             move.setAttribute('id', 'move')
        //             move.innerText = `${moves[i].move.name}`;
        //             pokeCard1.appendChild(move);
        //             let moveURL = moves[i].move.url;
        //             axios.get(moveURL).then((response) => {
        //                 let eachMove = document.createElement('p');
        //                 eachMove.setAttribute('class', 'power');
        //                 eachMove.innerText = `PP: ${response.data.pp}`;
        //                 move.appendChild(eachMove);
        //             })
        //         }
        //         //same as above but if there is an existing pokemon being displayed
        //     } else {
        //         newPokeCard1 = document.createElement('div');
        //         newPokeCard1.setAttribute('id', 'pokeCard1');
        //         pokeCard1.parentNode.replaceChild(newPokeCard1, pokeCard1);

        //         let type = pokemon1.types[0].type.name;
        //         newPokeCard1.style.backgroundColor = colorTypes[type];

        //         let newTypeName = document.createElement('h3');
        //         newTypeName.innerText = `${pokemon1.types[0].type.name} `;
        //         newTypeName.setAttribute('class', 'type1');
        //         newPokeCard1.appendChild(newTypeName);

        //         let name1 = document.createElement('h2');
        //         name1.innerText = pokemon1.name;
        //         name1.setAttribute('id', 'name1');
        //         newPokeCard1.appendChild(name1);
        //         div.appendChild(newPokeCard1);

        //         let hp1 = document.createElement('p');
        //         hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
        //         hp1.setAttribute('id', 'hp1');
        //         newPokeCard1.appendChild(hp1);

        //         pic1.src = `${pokemon1.sprites.front_shiny}`;
        //         newPokeCard1.appendChild(pic1);
        //         let moves = pokemon1.moves;

        //         for (i = 0; i < 4; i++) {
        //             let move = document.createElement('p');
        //             move.innerText = `${moves[i].move.name}`;
        //             move.setAttribute('id', 'move')
        //             newPokeCard1.appendChild(move);
        //             let moveURL = moves[i].move.url;
        //             axios.get(moveURL).then((response) => {
        //                 let eachMove = document.createElement('p');
        //                 eachMove.setAttribute('class', 'power')
        //                 eachMove.innerText = ` PP: ${response.data.pp}`;
        //                 move.appendChild(eachMove)
    //                 })
    //             }
    //         }
    // } catch (err) {
    //         console.log('oops, there was an error. please try again', err);
    //     }
    
    console.log(data)
    }
