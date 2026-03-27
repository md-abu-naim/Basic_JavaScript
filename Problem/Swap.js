let a = 5
let b = 7

console.log(a, b); // 5, 7

const temp = a;
a = b
b = temp
console.log(a, b); // 7, 5


// Distructuring
let x = 5;
let y = 7;

console.log(x, y); // 5, 7

[x, y] = [y, x]

console.log(x, y); // 7, 5