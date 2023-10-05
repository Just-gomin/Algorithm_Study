// --------------------
// JavaScript Array
// --------------------

console.log("--------------------");
console.log("JS Array");
console.log("--------------------");

// Create Data
let array = Array(...Array(10).keys());

console.log("Create Data", array);

// Read Data
console.log("Read Data", array[1]); // 1

// Update Data
array[1] = 12;

console.log("Update Data", array[1]); // 12

// Delete Data
delete array[1];

console.log("Delete Data", array[1]); // undefined