// let obj={
//     name:"praveen",
//     age:22,              //this how we create object in js
//     khana:"dal chawal",
// };
// console.log(obj);
// console.log(obj[khana]); //-- . & [] both can be used to access the values of object


// let obj={
//     name:"praveen",
//    //key : value structure
// };
//console.log(obj[name]);

//NESTING & DEEP ACCESSING --nesting means ek object ke andar dusra object ho sakta hai
// const user={
//     name:"praveen",
//     address:{
//         city:"Pune",
//         pincode:411033,  
//         location:{
//             lat:12.34,
//             long:56.78,
//         },
//     },
// };
// console.log(user.name);
// console.log(user.address.location.lat);

//OBJECT DESTRUCTURING

//  const user={
//     name:"praveen",
//     address:{
//         city:"Pune",
//         pincode:411033,
//         location:{
//             lat:12.34,
//             long:56.78,
//         },
//     },
// };   
// let{lat,long}=user.address.location;// destructuring syntax
// console.log(lat);
// console.log(long);


// for in loop
//  const user= {
//     name:"praveen",
//     age:22,
//     khana:"dal chawal",
// };      
// for(let key in user){   //key will give the property names of object
//     console.log(key + ":", user[key]);  //[key] is working because key is variable here which holds property names of user object
//     console.log("key : ", user.key);   //.key cant work because it will look for key property in user object which is not present
// }



// checking if key exists in object
// const user={
//     name:"praveen",
//     age:22,
//     khana:"dal chawal",
// };
// let khana = "lunch";
// console.log(khana in user);  //-- false
// let key="name";
// console.log(key in user);  //-- true 

// const course ={
//     title :"javascript",
//     duration: "6 months",
// };
// // for (let key in course){  // 1st demo
// //     console.log(key);
// // }
// Object.entries(course).forEach(function(val){     //2nd demo
//     console.log(val[0] ," : ",val[1])
// });


// const key = "role"
// let obj1 = {
//     name : "praveen",
//     [key] : "admin",
// }
// console.log(obj1);