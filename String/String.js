// ******************************************
//       Lerning JavaScript String          //
// ******************************************

const country = 'Bangladesh'
const divison = "Noakhali"
const city = `Noakhali`
const thana = new String('Senbag')

console.log(typeof country); // string
console.log(typeof divison); // string
console.log(typeof city);    // string
console.log(typeof thana);   // object


// Array is mutable --> you can change the array element
let numbers = [25, 52, 41, 55]
console.log(numbers);  // [25, 52, 41, 55]

numbers[0] = 50
console.log(numbers); // [50, 52, 41, 55]



// But, String is immutable --> you can't change the string element
const capital = 'Dhaka'
console.log(capital); // Dhaka

capital[0] = 'F'
console.log(capital); // Dhaka
