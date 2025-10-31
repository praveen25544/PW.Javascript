//HIGHER ORDER FUNCTION :A function that returns another function
//Example: A discount calculator

function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100);    // is refers to the price parameter
    };
}
let discounter = discountCalculator(10);
console.log(discounter(200));