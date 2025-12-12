// function pay(user,name, inputPin, amount) {
//     try {
//         if (!user.paymentMethod) throw new Error("Payment method not found");
//         if (!user.isProfileVerified) throw new Error("Profile not verified");
//         if (inputPin !== user.pin) throw new Error("PIN mismatch");
//         if (amount > user.balance) throw new Error("Insufficient balance");

//         user.name = name;

//         // Transfer
//         user.balance -= amount;
//         console.log(amount + " transferred to " + user.name + ". Remaining balance: " + user.balance);
//     } catch (err) {
//         console.log("Payment failed: " + err.message);
//     } finally {
//         console.log("Payment attempted !");
//     }
// }

// // Example user
// const user = {  
//     name: "sharanu",
//     paymentMethod: "Card",
//     isProfileVerified: true,
//     pin: "2580",
//     balance: 18000
// };

// // Tests
// pay(user,"sharanu", "2580", 120000);
// pay(user, "1111", 2000); 
// pay(user, "sharanu ","2580", 6000);         


function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero.");  
    return a / b;
}

try {
    let result = divide(10, 2);
    console.log("Result:", result);
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("Division attempt finished");
}