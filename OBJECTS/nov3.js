// const products = [
//   { id: 1, name: "Laptop", price: 45000 }, //0 index
//   { id: 2, name: "Phone", price: 20000 }    //1 index
// ];

// console.log(products[1].name);
// console.log(products[0].price);  //0 is for first object
// console.log(products.length);    //length of array
// console.log(products[0]);       //first object

//DELETE OPERATION
// const user={
//     name:"praveen",
//     age:22, 
//     khana:"dal chawal",
// };  
// delete user.khana;
// console.log(user);

// let fname="greet";
// let key= "age";
// let student={
//     [key]:22,
//     name:"praveen",
//     marks:{
//         Science:85,
//         English:88,
//     },
//     [fname]:function(){
//         console.log("hello ", this.name);
//     }
// }

// student.greet();
// console.log(student);
// console.log(student["age"]);

//HASOWNPROPERTY EXAMPLE
// let person={
//     name:"praveen",
    
// }
// person.__proto__.age = 22; //adding property to prototype its not directly added to person object

// // for(let key in person){
// //     console.log(key);
// // }
// console.log(person.hasOwnProperty("name")); //true because name is direct property of person object
// console.log("age" in person);  //true even if age is in prototype
// console.log(person.hasOwnProperty("age")); //false because age is not direct property of person object

//string literals
// let key = "name";
// let age = 22;
// console.log("My name is " + key + " and my age is " + age); 
// console.log(`My name is ${key} and my age is ${age}`);


// let key ="user";
// let obj={
//     [`${key}_id`]:101,
//     [`${key}_name`]:"praveen",

// };
// console.log(obj);


//optional chaining in js
// const obj={
//     profile:{
//         name:"praveen",
//     }
// };
// console.log(obj?.profile?.name); //optional chaining
// console.log(obj?.profile?.age);//? it means if age is not present then it will not throws error

//ex:1
// let obj={
//     addres:{
//         place:"pune"
//     }
// };
// console.log(obj?.addres?.name);
// console.log(obj?.addres?.place);

// const prav={
//     greet() {
//            console.log("hello?");    // OPTIONAL CHAINING
//     }
// }
// prav.greet();
// console.log(prav?.greet());

