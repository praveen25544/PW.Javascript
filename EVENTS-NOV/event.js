//change event tab chalta he jab apka select or  text area me koi change hoga


// let sel =document.querySelector("select");
// sel.addEventListener("change",function(details){       //only for showing value
//     console.log(details.target.value);
// })


let sel = document.querySelector("select");
let device = document.querySelector("#Device");

sel.addEventListener("change", function(details) {
    device.textContent = `${details.target.value} : Device selected`;    //device ka text content show karega value ke saath
});