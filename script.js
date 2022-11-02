const button = document.querySelector(".btn");
const joketext = document.querySelector(".joketext");

button.addEventListener("click", getJokes);

async function getJokes() {
    const jokesData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    const jokesObject = await jokesData.json()
    joketext.innerHTML = `${jokesObject.joke}`
}