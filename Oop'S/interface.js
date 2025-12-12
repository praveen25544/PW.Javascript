// "Interface" simulation: Payment class acts like an interface blueprint
class Payment {
    // Constructor initializes account details
    constructor(accNumber, name, amt = 0) {
        this.accNumber = accNumber;
        this.name = name;           
        this.amt = amt;             
    }

    // Method to send money
    // Any class implementing a "Payment interface" should have this method
    sendMoney(amount) {
        this.amt -= amount;
        console.log(`${this.name} sent ${amount}. Remaining balance: ${this.amt}`);
    }

    // Method to request money
    requestMoney(amount) {
        this.amt += amount; //+= means add kar raha hai
        console.log(`${this.name} received ${amount}. Current balance: ${this.amt}`);
    }
}

// Usage
const user1 = new Payment("1234567890", "Praveen", 1000000);

user1.sendMoney(230000);    
user1.requestMoney(450000);
