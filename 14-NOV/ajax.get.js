const btn = document.querySelector("#btn");
const output = document.querySelector("#getposts");

function getPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.onload = function () {
        if (xhr.status === 200) {
            output.innerText = xhr.responseText;
        } else {
            output.innerText = "Error loading data";
        }
    };

    xhr.send();
}

btn.addEventListener("click", getPosts);