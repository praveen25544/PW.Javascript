// Map is used when you want to store data in key–value pairs for fast access, counting, or relationship mapping.

//Create a Map
const allmarks = new Map();

//Add students
allmarks.set(101, 95);// Adding key-value pairs
allmarks.set(102, 68);
allmarks.set(103, 76);

console.log("Marks of Roll 103:", allmarks.get(103));  //.get is used to access value by key in the map

if (allmarks.has(101)) {           //.has is used to check if a key exists in the map
    console.log("Student 101 exists!");
}

allmarks.delete(103);    // .delete is used to remove a key-value pair from the map

// Step 6: Loop through all students
console.log("All students and their marks:");
for (let [roll, marks] of allmarks) {
    console.log("Roll:", roll, "Marks:", marks);
};