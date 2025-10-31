//FOR-IN, OBJECT.KEYS(), OBJECT.VALUES(), OBJECT.ENTRIES()
let user={
    name:"praveen",
    age:22,
    khana:"dal chawal",
};      
//FOR-IN LOOP
for(let key in user){
    console.log("key:",key);
    console.log("value:",user[key]);//hum object ke andar se value ko access kar rahe hai 
    // using bracket notation
}   

//OBJECT.KEYS()
let keys=Object.keys(user); 
console.log(keys);  //['name','age','khana']--Array banata hai

//OBJECT.VALUES()
let values=Object.values(user);
console.log(values); //['praveen',22,'dal chawal']

//OBJECT.ENTRIES()
let entries=Object.entries(user);
console.log(entries); //[['name','praveen'],['age',22],['khana','dal chawal']] 