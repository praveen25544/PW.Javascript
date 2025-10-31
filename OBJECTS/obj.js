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

 const user={
    name:"praveen",
    address:{
        city:"Pune",
        pincode:411033,
        location:{
            lat:12.34,
            long:56.78,
        },
    },
};   
let{lat,long}=user.address.location;// destructuring syntax
console.log(lat);
console.log(long);




