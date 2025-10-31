// function factorial(n) {
//     if (n === 0) {
//         return 1;                     // function recursive calls itself
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(3));

function power(base, n) {   //base ki jagh kuch bhi aa skta hai aur exp ki bi i.e a,n...
  if (n === 0) {        // base case
    return 1;
  }
  return base * power(base, n - 1); // recursive case
}

console.log(power(2, 3)); 