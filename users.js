let myUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
	let populateButton = document.querySelector('button');
	populateButton.addEventListener('click', populate);
} )


const populate = async () => {
	let response = await axios.get(myUrl);
	let mainBody = document.querySelector('.main-div');
	let button = document.querySelector('button');
	button.style.display = 'none';
	for(let i = 0; i < response.data.results.length; i++){
		let wrapperDiv = document.createElement('div');
		let img = document.createElement('img');
		if(response.data.results[i].gender === 'male'){
			img.src = "https://img.icons8.com/officel/160/000000/user-male-skin-type-4.png";
		}
		else{
			img.src = "https://img.icons8.com/officel/160/000000/user-female-skin-type-4.png";
		}
		let smallDiv = document.createElement('div');
		let h4 = document.createElement('h4');
		let p = document.createElement('p');
		wrapperDiv.className = 'card';
		smallDiv.className = 'container';
		h4.innerText = `${response.data.results[i].name.title} ${response.data.results[i].name.first} ${response.data.results[i].name.last} `
		p.innerText = `Nationality: ${response.data.results[i].nat}`;
		smallDiv.appendChild(h4);
		smallDiv.appendChild(p);
		wrapperDiv.appendChild(img);
		wrapperDiv.appendChild(smallDiv);
		mainBody.appendChild(wrapperDiv);
	}
}