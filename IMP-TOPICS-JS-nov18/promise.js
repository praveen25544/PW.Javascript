// Function jo ek Promise return karta hai
function httpcall() {

    //  Promise asynchronous hota hai — yeh turant result nahi deta
    return new Promise((resolve, reject) => {
        console.log("promise started");  
        // Yeh line turant chalegi (synchronous part)

        // 3 sec baad async result denge
        setTimeout(() => {
           return resolve("Task Completed from Function");  
            // Agar reject karna ho toh: reject("Error");
        }, 3000);

        console.log("promise ended");
        // Yeh bhi turant chalega, setTimeout ka wait nahi hota
    });
}
console.log("start");   // Step 1: Synchronous

// Promise-returning function call
const p = httpcall();

//  Promise resolve/reject ko handle karna
p.then((msg) => {
    console.log("promise resolved");   // 3 sec baad chalega
})
.catch((msg) => {
    console.log("promise is rejected");
});

console.log("end");     // Step 2: Yeh bina wait ke turant chalega



// let myPromise = new Promise((resolve, reject) => {
//     let foodReady = false; // agar false karenge to reject hoga

//     if (foodReady) {
//         resolve("Food delivered 😍");
//     } else {
//         reject("Order cancelled 😢");
//     }
// });

// myPromise
//     .then((result) => {
//         console.log(result); // agar resolve hua
//     })
//     .catch((error) => {
//         console.log(error); // agar reject hua
//     });