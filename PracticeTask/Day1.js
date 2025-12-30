//  You went to the supermarket to by some oranges and apples. Calculate how much money the shopkeeper will return.
// Input: The first line of the input is the taka have. The second line i the cost of 1kg of oranges and 1kg of apples

// sample Input: 1000, 700
// Output: 300

var myMoney = 1000 
var orangeApples = 700

var returMoney = myMoney - orangeApples

console.log(returMoney); // 300




// Write a program to calculate the avarage marks of Mathmetics, Biology, Chemistry, Physics, and Bangla of a student.

// Input: The first line of the input is the marks of the five subjects mentioned above, respectively.

// Sample Input: 75.25, 65, 80, 35.45, 99.50
// Output: 71.04

var mathmetics = 75.25;
var biology = 65;
var chemistry = 80;
var physics= 35.45;
var bangla = 99.50

var totalMarks = mathmetics + biology + chemistry + physics + bangla
var evarage = totalMarks / 5
console.log(evarage.toFixed(2));  // 71.04



// You task is to divide the given number by 5 and show the remainder as the output.

// Input: The first line of the input contains the number.

// Sample Input: 119
// Output: 4

var number = 119

const divide = number % 5

console.log(divide); // 4


// What will be the result of the following codes:

// 1. const a = isNaN('11')
// 2. const b = isNaN(2-10)

const a = isNaN('11')
const b = isNaN(2-10)

console.log(a); // false
console.log(b); // false