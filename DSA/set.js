// 1️⃣ Create a Set
const mySet = new Set();
console.log(mySet);

// 2️⃣ Add elements
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(70); // duplicate, ignored
console.log("After adding elements:", mySet);

// 3️⃣ Check size
console.log("Size of Set:", mySet.size);

// 4️⃣ Check if an element exists
console.log("Has 50? :", mySet.has(50)); 
console.log("Has 40? :", mySet.has(40)); 

// 5️⃣ Delete an element
mySet.delete(20);
console.log("After deleting 20:", mySet);

// 6️⃣ Loop through Set
console.log("Looping through Set:");
for (let item of mySet) {
    console.log(item);
}

// 7️⃣ Convert Set to Array
const setToArray = [...mySet]; // or Array.from(mySet);
console.log("Set to Array:", setToArray);  

// 8️⃣ Clear the Set
mySet.clear(); 
console.log("After clearing Set:", mySet);
console.log("=============================================================");


// 9️⃣ Create Set from Array (remove duplicates)
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(arr);
console.log("Unique Set from array:", uniqueSet);

//  🔟 Convert Set back to Array
const uniqueArr = Array.from(uniqueSet);
console.log("Unique Array:", uniqueArr);
console.log("=============================================================");


// 1️⃣1️⃣ Advanced: Union, Intersection, Difference
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x))); //inteersection means elements common in both sets 
console.log("Intersection:", intersection);

// Difference (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A-B):", difference);                    //difference means elements present in setA but not in setB