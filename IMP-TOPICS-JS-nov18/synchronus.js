// Line-by-Line execution
// JS normally ek line chalata hai, fir next line.
// Jab tak ek line complete nahi hoti, next line start nahi hoti.
// Isko bolte blocking code.

// console.log("start");

// function longtask() {
//     const start = Date.now(); // starting time

//     // run loop for 3 seconds (3000 ms)
//     while (Date.now() - start < 3000) {
//         // busy waiting
//     }

//     console.log("longtask is completed");
// }

// longtask();

// console.log("end");



function longtask(taskName, timetowait) {
    const start = Date.now(); // starting time

    // run loop for timetowait milliseconds
    while (Date.now() - start < timetowait) {
        // busy waiting
    }

    console.log(taskName + " is completed");
}

console.log("start");

longtask("api call", 1000);                   // 1 sec block
longtask("database interaction", 1500);       // 1.5 sec block
longtask("third party package interaction", 2000); // 2 sec block

console.log("end");