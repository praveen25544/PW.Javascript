// function abcd(){
//                 //-----function declaration-----
// }

// let function =function(){
//                 //-----function expression-----
// }

// let abcd = () => {
//                  //------arrow function-----
// }


// function dance(){
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");

// }
// console.log(dance());


// function add(v1,v2){     //----v1,v2 are parameters-----
//     console.log(v1+v2);  //----function with parameters-----
// }
// add(20,45);         //----20,45 are arguments-----
// add(100,200);


// function abcd(a,b,c,d,...val){      //--... is rest operator--
//     console.log(a,b,c,d ,val);
// }
// abcd(10,20,30,33,44,55,66,77,88,99); 



// RETURN & EARLY RETURN

// function multiply(n1,n2){
//     return n1*n2;       //----function with return-----
// }    
// console.log(multiply(55,66));           


// function checkEvenOdd(num){
//     if(num%2==0){
//         return "even number";      //----early return----
//     }   
//     return "odd number";          //----early return----            
// }
// console.log(checkEvenOdd(55));
// console.log(checkEvenOdd(66));

// PURE FUNCTION

// function Add(n1,n2){
//     return n1+n2;       //----pure function----
// }
// console.log(Add(10,4));
// console.log(Add(4,6));

// IMPURE FUNCTION

// let c = 5;      
// function sum(n1,n2){
//     return n1+n2+c;     //----impure function----
// }
// console.log(sum(10,56));


//CLOSURE & LEXICAL SCOPING

// function abcd(){
//     let a=10;               //----lexical scoping----
//     function xyz(){
//         console.log(a);    //----closure----
//     }
//     xyz();
// }
// abcd();                    //----invoking outer function----


// function mult(a,b,c){
//     console.log(a*b*c);    //--3 numbers multiply
// }
// mult(2,3,6);