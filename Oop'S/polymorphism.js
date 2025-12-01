// // =========================
// // POLYMORPHISM
// // (Same function name, but different output)
// // Overriding through child classes
// // =========================

// class Animal {
//   sound() {
//     console.log("Some animal sound...");
//   }
// }

// class Dog extends Animal {
//   // same function name → different output
//   sound() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   // same function name → different output
//   sound() {
//     console.log("Cat meows");
//   }
// }

// const a = new Animal();
// const d2 = new Dog();
// const c2 = new Cat();

// a.sound(); 
// d2.sound(); 
// c2.sound(); 



// class Notification {
//   send() {
//     console.log("Default notification");
//   }
// }

// class Email extends Notification {
//   send() {
//     console.log("Email sent");
//   }
// }

// class SMS extends Notification {
//   send() {
//     console.log("SMS sent");
//   }
// }
// // Objects of each class
// const no =new Notification();
// const n1 = new Email();
// const n2 = new SMS();

// // Calls send() method
// no.send();
// n1.send();
// n2.send();



class Shipping{
  calculate(){
    return 0;
  }
}

class standardshipp extends Shipping{
  calculate(){
    return 50;
  }
}

class expressshipp extends Shipping{
  calculate(){
    return 100;
  }
}

const s1 = new Shipping();
const s2 = new standardshipp();
const e1 = new expressshipp();

console.log(s1.calculate());
console.log(s2.calculate()); 
console.log(e1.calculate());