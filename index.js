// Joseph P. Pasaoa
// Web Server Intro Lab
//

/* HELPERS */
const log = console.log;



const getServerData = async () => {
  const serverUrl = 'http://localhost:3010/';
  const resp = await axios.get(serverUrl);
  log('data: ', resp.data);
  log('resp: ', resp);
  return resp.data.results;
}

/* POSTDOM Execs */
document.addEventListener("DOMContentLoaded", async () => {
  let users = await getServerData();

  for (let user of users) {
    createUserCard(user);
  }
});

const createUserCard = (obj) => {
  let cardTable = document.querySelector('#stage');

    let makingCard = document.createElement('div');
    makingCard.className = 'usercard';
      let makingTitle = document.createElement('h6');
      makingTitle.innerText = obj.name.title;
      let makingName = document.createElement('h3');
      makingName.innerText = `${obj.name.first} ${obj.name.last}`;
      let makingP = document.createElement('p');
      makingP.innerHTML = `nationality: <b>${obj.nat}</b>`;

    makingCard.append(makingTitle, makingName, makingP);
  
  cardTable.append(makingCard);
}
