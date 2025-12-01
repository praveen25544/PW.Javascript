// =========================
// ENCAPSULATION
// (Data + Functions ko ek class me pack karna)
// =========================

class User {
  // constructor = jab bhi object banta hai tab chalega
  constructor(name, age) {
    // yeh variables sirf isi class ke andar stored hai
    this.name = name;
    this.age = age;
  }

  // method = behavior / function of class
  sayHi() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const u1 = new User("Praveen", 22);  // object create
u1.sayHi(); // function call