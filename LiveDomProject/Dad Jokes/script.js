const jokeEl = document.getElementById('joke')
const jokesBtn = document.getElementById('jokeBtn')

jokesBtn.addEventListener('click',generateJoke)

async function generateJoke() {

    const config ={headers:{Accept: 'application/json'}}

    const res = await fetch('https://icanhazdadjoke.com',config)
    console.log(res)

    const data = await res.json()

    jokeEl.innerHTML=data.joke
}