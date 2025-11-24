//Async/await is syntactic sugar over Promises that lets you write asynchronous code in a synchronous style using await to pause execution until a Promise resolves.

function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 2000);
    });
}

async function run() {
    console.log("Fetching...");
    let result = await getData(); // waits here
    console.log(result);
}

run();


// async function fetchUser() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error aya:", err);
//   }
// }

// fetchUser();