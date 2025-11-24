console.log("start");

function getJoke() {
    return new Promise((resolve, reject) => {

        fetch("https://official-joke-api.appspot.com/jokes/random")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

    });
}

getJoke()
    .then(joke => console.log("Joke:", joke))
    .catch(err => console.log("Error:", err));

console.log("end");