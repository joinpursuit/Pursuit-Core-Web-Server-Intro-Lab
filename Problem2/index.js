document.addEventListener('DOMContentLoaded', ()=>{
    getServerButton().addEventListener('click', loadDataFromServer)
})
function getServerButton(){
    return document.querySelector("#serverButon")
}
async function loadDataFromServer() {
    const myUrl = 'http://localhost:3001'
    const resp = await axios.get(myUrl)
    displayResponseFromServer(resp.data)
}
function displayResponseFromServer(data) {
    console.log(data)
    const ptag = document.createElement('p')
    ptag.innerText = data.question
    const selecttag = document.querySelector('')
    selecttag.setAttribute('src', '/*select')
}