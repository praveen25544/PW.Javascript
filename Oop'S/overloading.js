//METHOD OVERLOADING => having multiple fuctions with same name but different parameters is called method overloading
//  function greet(name, age) {
//     if (name !== undefined && age !== undefined) {
//         console.log(`Hello ${name}, you are ${age} years old`); //overloading when both name and age are provided
//     } else if (name !== undefined) {
//         console.log(`Hello ${name}`); //overloading when only name is provided
//     } else {
//         console.log("Hello World"); //overloading when no arguments are provided
//     }
// }

// // Calling the function with different arguments
// greet();              
// greet("praveen");      
// greet("praveen", 22);  



class Logger {
    log(msg, err) {
        if (typeof msg === "string" && typeof err === "undefined") {
            console.log(`INFO: ${msg}`);
        } else if (msg instanceof Error) {
            console.log(`Error: ${msg.message} `);
        }else if(typeof msg === "string" && err instanceof Error){
            console.log(`Error: ${msg} ${err.message}`);
        }
    }
}


// Create instance
let loggerObj = new Logger();

// Logging examples
loggerObj.log("Operation successful");              
loggerObj.log( new SyntaxError("Invalid username"));  
loggerObj.log("Something went wrong", new Error("Something"));  
