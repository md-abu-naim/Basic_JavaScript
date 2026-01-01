// ******************************************
//            Lerning Comparison           //
// ******************************************

// Greter then
console.log(5 > 10); // false
console.log(15 > 10); // true

// Less then
console.log(15 < 10); // false
console.log(5 < 10); // true

// Equal
console.log(5 == 10); // false
console.log(10 == 10.5); // false
console.log(10 == 10); // true

// Greter then or Equal
console.log(5 >= 10); // false
console.log(12 >= 10); // true
console.log(10 >= 10); // true

// Less then or Equal
console.log(12 <= 10); // false
console.log(5 <= 10); // true
console.log(10 <= 10); // true


// ----------- Using with Variable---------
const peyarPrice = 40
var applePrice = 120

console.log(peyarPrice > applePrice); // false
console.log(peyarPrice < applePrice); // true




//  ------- -----------------------------
//   Double & thirpol Equal == or ===   //
// --------------------------------------

console.log(10 == 10); // true
console.log(10 == "10"); // true  Just check value
console.log(10 === "10"); // false Check value & data type both

// Not Equal
console.log(10 != '10'); // false
console.log(10 !== '10'); // true