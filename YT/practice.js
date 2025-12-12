// // let a=10;

// // setInterval(function(){
// //     console.log("100" + a);
// // },2000);
// // clearInterval();


// // Inheritance Example
// class Dog{
//     bark(){
//         console.log("dog barks");
//     }
//     }

// class cat extends Dog{
//     meows(){
//         console.log("cat meows");
//     }
// }
// const d1 =new cat();
// // setInterval(function(){
// //     console.log("d1.bark & d1.meows called");
// // }, 2000);
// d1.bark();
// d1.meows();
// // clearInterval();


// //POLYMORPHISM EXAMPLE
// class Animal{
//     louds(){
//         console.log("animal makes sound");
//     }
// }
// class Lion extends Animal{
//     louds(){
//         console.log("lion roars");
//     }   

// }
// class Tiger extends Animal{
//     louds(){
//         console.log("tiger grr");
//     }   
// }
// const a = new Animal();  //inherit & polym me diff ye ki 3 alag class me same method name hoga but alag alag output dega
// a.louds();
// const a1 = new Tiger();
// a1.louds();

// const a2 = new Lion();
// a2.louds(); 



// INTERFACE EXAMPLE
// "Interface" simulation: Payment class acts like an interface blueprint
class Payment {
    // Constructor initializes account details
    constructor(accNumber, name, amt = 1000) {
        this.accNumber = accNumber;
        this.name = name;           
        this.amt = amt;             
    }
}
// Method to send money  //prototype is used to add methods to existing class
Payment.prototype.sendMoney = function(amount) {
    this.amt -= amount;
    console.log(`${this.name} sent ${amount}. Remaining balance: ${this.amt}`);
};
// Method to request money
Payment.prototype.requestMoney = function(amount) {
    this.amt += amount; //+= means add kar raha hai
    console.log(`${this.name} received ${amount}. Current balance: ${this.amt}`);
};
// Usage
const  u1 = new Payment("1234567890", "Praveen", 1000);
u1.sendMoney(230);    
u1.requestMoney(450);
const payment = Payment; // Corrected the class name casing
//============================================================
const u2 = new Payment("0987654321", "Anjali", 500000);
u2.sendMoney(150000);    
u2.requestMoney(300000);


