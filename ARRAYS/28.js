// let arr=[1,3,5,8,9];
//  let newarr = arr.map(function (val) {   //--return value stores in newarr as array
//     return 12;
//  });    
// console.log(newarr);

//example for if condition inside map

// let arr=[1,3,5,8,9];
//  let newarr = arr.map(function (val) {   
//    if (val > 5) {
//        return 12;
//    }
//  });    
// console.log(newarr);


// let fruits = ["apple", "banana", "grapes", "mango"];
// fruits.push("mango");
// fruits.unshift("pineapple");
// console.log(fruits);


// let fruits=["mango","banana"];
// fruits[1]="kiwi";  // replacing "banana" with "kiwi"
// fruits.reverse();
// console.log(fruits);


// let arr=[20,5,7,90,32,3];
// let newArr=arr.filter(function(val)  //-- return value stores in newArr as array
// {return val>12                       //-- filter method filters values based on condition
// });
// newArr.shift();
// console.log(newArr);


// let arr=[1,5,3,7,9.45];
// console.log(arr.splice(0,3)); //(index -- number of elements to be remove)--it modifies original array
// console.log(arr);  //remaining elements after splice


// let a = [10,20,30,40,50];
// console.log(a.splice(-2, 2)); // actualStart = 5 + (-2) = 3
// removes elements at index 3 and 4 -> 40,50
// a becomes [10,20,30]


// arr=[1,5,3,7,9.45];
// // -- removes 3 elements from index 0
// let newArr=arr.slice(2,-2);   //(start index, end index)-- does not modify original array
// console.log(newArr);



// let countries=["uk","ln"];
// countries=["india",...countries];   //-- spread operator to add elements at the beginning
// console.log(countries);

// CONCATENATION OF ARRAYS
// let arr1=[1,3,5];
// let arr2=[2,4,6];  
// let arr3=[7,8,9];
// let newArr=arr1.concat(arr2,arr3);  //-- concatenation of arrays
// //WAYS OF CONCATINATION USING SPREAD OPERATOR

//let newArr=[...arr1,...arr2,...arr3];    // spread operator for concatenation
// console.log(newArr);


//reduce method left to right
// let arr=[1,2,3,4,5];
// let sum=arr.reduce(function(acc,curVal){
//     return acc + curVal;
// },0);
// console.log(sum);

//for right to left reduce
// let arr=[1,2,3,4,5];
// let sum=arr.reduceRight(function(acc,curVal){
//     return acc + curVal;
// },0);
// console.log(sum);


//reduceright method for nested arr
// let arr=[[1,2],[3,4],[5,6]];//accumulator is array of arrays
// let newArr=arr.reduceRight((acc,curVal) => {//current value is array
//     return acc.concat(curVal); // it is concatenating arrays
// },[]); // [] it is initial value of acc 
// console.log(newArr);


//SOME & EVERY METHOD
    // let arr=[2,4,6,8,10];
    // let res=arr.every((val) => {  //-- checks if all elements satisfy the condition : ALL TRUE
    //     return val%2==0;
    // });
    // console.log(res); 
    // let res1=arr.some((val) => {   //-- checks if at least one element IS TRUE
    //     return val>8;
    // });
    // console.log(res1);

   let marks1=[45,67,94,23,12,90];
   let marks2=[45,67,94,23,12,90];//<50 is fail //1 fail all fail
    let res=marks1.every((val) => {
        return val>=50;
    });
    console.log(res);   
    let res1=marks2.some((val) => {

        
        return val<50;  
    });
    console.log(res1);
    