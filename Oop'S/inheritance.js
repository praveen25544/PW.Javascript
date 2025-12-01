// =========================
// INHERITANCE
// (Parent → Child properties pass)
// 'extends' keyword use hota hai
// =========================

class Animal {
  eat() {
    console.log("Animal is eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking...");
  }
}

const d = new Dog();

d.eat();  // parent class method
d.bark(); // child class method