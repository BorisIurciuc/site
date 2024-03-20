const getFetchElementCat = document.getElementById("get-fetch-cats");
const getFetchElementBored = document.getElementById("get-fetch-bored");
const getFetchElementGitHub = document.getElementById("get-fetch-gitHub");

fetch("https://catfact.ninja/fact")
.then((response) => response.json())
.then(obj => {
    const {fact} = obj;
    getFetchElementCat.textContent = `${fact}`
})

async function loadingBoredAct() {
    const responce = await fetch("http://www.boredapi.com/api/activity");
    const obj = await responce.json();
    const {activity} = obj;
    getFetchElementBored.textContent = `${activity}`
}
loadingBoredAct();

fetch("https://github.com/BorisIurciuc/site/blob/main/jsonpost.json/title")
.then(response => {
    if(response.status !== 200) {
        throw new Error ("Error");
    }
    return response.json();
})
.then((response) => response.json())
.then(obj => {
    const {title} = obj;
    getFetchElementGitHub.textContent = `${title}`
})
.catch(error => {
    console.error();
})

