const femaleSrc = [1, 2, 3, 4, 5];
const maleSrc = [1, 2, 3, 4, 5];

const fetchData = async () => {
    const url = 'http://localhost:3000';
    const response = await axios.get(url);
    console.log(response.data.results);
    createCard(response.data.results);
}

const createCard = (obj) => {
    const container = document.querySelector('#container');

    const div = createElement('div');
    const img = createElement('img');
    const h3 = createElement('h3');
    const p = createElement('p');

    if (obj[3].gender === 'female') {
        const num = randomPhoto('female');
        img.src = `assets/female0${num}.png`;
    } else {
        const num = randomPhoto('male');
        img.src = `assets/male0${num}.png`;
    }

    h3.innerText = `${obj[3].gender}, ${obj[0].nat}`;
    p.innerText = `${obj[0].name.first} ${obj[0].name.last}`;

    div.append(img, h3, p);
    container.appendChild(div);
}

const createElement = (tag) => document.createElement(tag);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', fetchData);
})

const randomPhoto = (gender) => {
    if (gender === 'female') {
        const num = Math.floor(Math.random() * femaleSrc.length);
        return femaleSrc[num];
    } else {
        const num = Math.floor(Math.random() * maleSrc.length);
        return maleSrc[num];
    }
}