// const car = {
//     brand :"toyota",
//     drive(){
//         console.log(`driving, ${this.brand}`)
//     }
// }
// car.drive();


class Car {
    constructor(brand, type = "electric") {  // default type
        this.brand = brand;
        this.type = type;
    }

    drive() {
        console.log(`driving ${this.brand}`);
    }
}

const toyota = new Car("Toyota", "petrol");
toyota.type = "electric";
console.log(toyota.brand + ":" + toyota.type);