// const user = {
//   name: "Praveen",
//   sayName: function() {
//     console.log(this.name);  //--'this' refers to the current object
//   }
// };

// user.sayName(); 


//CONSTRUCTOR METHOD USING 'this'

// function Car(brand) {
//   this.brand = brand;
// }
// Car.prototype.start = function() {    //-- adding method to prototype
//   console.log(this.brand + " started 🚗");   //-- 'this' refers to the instance of Car
// };

// const c1 = new Car("BMW");
// const c2 = new Car("Tesla");

// c1.start(); // BMW started 🚗
// c2.start();