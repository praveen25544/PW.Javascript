const btn = document.getElementById("btn");
const dogImg = document.getElementById("dogImg");

btn.addEventListener("click", function () {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            dogImg.src = data.message;  // image change
        })
        .catch(error => {
            console.log("Error:", error);
        });

});


