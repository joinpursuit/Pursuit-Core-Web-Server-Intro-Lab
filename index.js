const femaleSrc = [];
const maleSrc = [];

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

    if (obj[0].gender === 'female') {
        const photo = randomPhoto();
        img.src = photo;
    } else {
        const photo = randomPhoto();
        img.src = photo;
    }

    h3.innerText = `${obj[0].gender}, ${obj[0].nat}`;
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