// ===========================================
// FULL OOPS EXAMPLE WITH COMMENTS
// ===========================================

// Parent class
class Person {

  // Encapsulation (data + function inside class)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// Child class using Inheritance
class Student extends Person {

  constructor(name, age, course) {
    super(name, age); 
    this.course = course;
  }

  // Polymorphism (same function name → different output)
  greet() {
    console.log(`Hi, I am ${this.name}, studying ${this.course}`);
  }
}

// object create
const s = new Student("Praveen", 22, "Full Stack Developer");
s.greet();