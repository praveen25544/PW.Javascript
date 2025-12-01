// =========================
// ABSTRACTION
// (Complex cheeze hide karke sirf required cheez dikhana)
// JS me # se private variable banta hai
// =========================

class Bank {
  #balance = 1000; // private variable (bahar se access nahi)

  deposit(amount) {
    // internal calculation hidden
    this.#balance += amount;
  }

  getBalance() {
    // sirf result show ho raha, inner logic nahi
    return this.#balance;
  }
}

const b = new Bank();
b.deposit(500);
console.log(b.getBalance()); // 1500
// console.log(b.#balance);  // ❌ ERROR: because it's private
