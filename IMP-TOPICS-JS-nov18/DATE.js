let now = new Date();

console.log("========== GET DATE METHODS ==========\n");

console.log("Full Date:", now);                    
console.log("Year:", now.getFullYear());         
console.log("Month (0-11):", now.getMonth());          
console.log("Month (1-12):", now.getMonth() + 1);      
console.log("Day of Month:", now.getDate());       
console.log("Day of Week:", now.getDay());             
console.log("Hours:", now.getHours());             
console.log("Minutes:", now.getMinutes());         
console.log("Seconds:", now.getSeconds());         
console.log("Milliseconds:", now.getMilliseconds());   

console.log("\n========== EXTRA USEFUL ==========\n");
console.log("Time in Milliseconds:", now.getTime());   // since 1970
console.log("Timezone Offset (min):", now.getTimezoneOffset()); // IST example: -330