// setTimeout(() =>{
//     console.log("first callback");

// setTimeout(() => {
//     console.log("Callback executed after 2.5 seconds");

// setTimeout(() => {
//     console.log("Callback executed after 4 seconds");
// }, 4000);

// },2500);

// },1500);


//CALLBACK HELL :
new Promise((resolve, reject) => resolve(1))
  .then(val => val + 1)   
  .then(val => val + 2)   
  .then(val => val + 3)   
  .then(val => console.log("Final-Answer:", val))
  .catch(e => console.log(e));