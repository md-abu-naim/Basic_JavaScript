// ***************************************************
// JavaScript Lerning isArray() for check array //
// ***************************************************

const friends = [ 'kalam', 'salam', 'balam', 'khailam' ]
console.log(friends); // [ 'kalam', 'salam', 'balam', 'khailam' ]

const nums = []
const str = 'abul fasjfj'
const age = 10

console.log(Array.isArray(friends)); // true
console.log(Array.isArray(nums)); // true
console.log(Array.isArray(str)); // false
console.log(Array.isArray(age)); // false