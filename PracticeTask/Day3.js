/**
 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array

 */

const fruits = ['apple', 'banana', 'orange', 'bedana', 'malta']

console.log(fruits[2]); // orange

fruits[1] = 'jambura'

console.log(fruits); // [ 'apple', 'jambura', 'orange', 'bedana', 'malta' ]


/**
 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */

const tourist = ['bandarban', 'kuakata', 'cox-bazar']

tourist.push('sylet') // [ 'bandarban', 'kuakata', 'cox-bazar', 'sylet',]
tourist.push('rangamati') // [ 'bandarban', 'kuakata', 'cox-bazar', 'sylet', 'rangamati' ]

tourist.pop()
console.log(tourist);['bandarban', 'kuakata', 'cox-bazar', 'sylet',]


/***
 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.

 */


const books = ['math', 'javascript', 'biology']

if (books.includes('javascript')) {
    console.log('books are here'); // books are here
}


/***
 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

const friends = ['naim', 'saim', 'kaim', 'abul']
const age = 12

if (Array.isArray(friends)) {
    console.log('this is an array'); // if friends so "this is array"
} else {
    console.log('this is not array'); // if age so "this is not array"
}


/**

5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().

 */


const nums = [10, 50, 42]
const str = ['abul', 'babul']

console.log(nums.concat(str)); // [ 10, 50, 42, 'abul', 'babul' ]