const getFetchElementCat = document.getElementById("get-fetch-cats");
const getFetchElementBored = document.getElementById("get-fetch-bored");

fetch("https://catfact.ninja/fact")
.then((response) => response.json())
.then(obj => {
    const {fact} = obj;
    getFetchElementCat.textContent = `${fact}`
})

async function loadingBoredAct() {
    const responce = await fetch("http://www.boredapi.com/api/activity/");
    const obj = await responce.json();
    const {activity} = obj;
    getFetchElementBored.textContent = `${activity}`
}
loadingBoredAct();