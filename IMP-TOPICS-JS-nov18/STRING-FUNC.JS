let str = "  JavaScript is Awesome!  ";
let text = "I Love javascript,javascript";

// length
console.log(str.length); // total characters

// lowercase / uppercase
console.log(str.toLowerCase()); // small
console.log(str.toUpperCase()); // capital

// trim spaces
console.log(str.trim());      // remove both side space
console.log(str.trimStart()); // remove left space
console.log(str.trimEnd());   // remove right space

// check contains
console.log(str.includes("Awesome")); // true/false

// start / end check
console.log(str.startsWith("Java"));          // false (because spaces)
console.log(str.trim().startsWith("Java"));   // true
console.log(str.trim().endsWith("!"));        // true

// find index
console.log(str.indexOf("is"));      // first position
console.log(str.lastIndexOf("is"));  // last position

// cut string
console.log(str.slice(2, 12)); // part of string
console.log(str.slice(-8));    // last 8 chars

// cut string (no negative)
console.log(str.substring(2, 12));

// replace
console.log(str.replace("Awesome", "Powerful"));  // first match
console.log(text.replaceAll("apple", "orange"));  // replace all

// string to array
let nums = "1,2,3,4,5";
console.log(nums.split(",")); // ["1","2","3","4","5"]

// match
console.log(text.match(/apple/g)); // find all "apple"  - //it will handle CASE-SENSITIVES

// repeat
console.log("Hi ".repeat(3)); // Hi Hi Hi

// character
console.log(str.charAt(4));      // character at index
console.log(str.charCodeAt(4));  // ASCII code

// add padding
let code = "42";
console.log(code.padStart(5, "0")); // 00042
console.log(code.padEnd(5, "*"));   // 42***

// join strings
console.log("Hello".concat(" World")); // Hello World

//SEARCH
console.log(text.search("java"));

// valueOf / toString
console.log(str.valueOf()); // primitive value
console.log(str.toString()); // string value

