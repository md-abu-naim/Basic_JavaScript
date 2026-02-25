// Get object property

const person = {
    name: 'Naim',
    age: '23',
    city: 'Noakhali',
    profession: 'Web Developer',
    'fav places': ['Coxs Bazar', 'Saint Martin', 'Kuakata']
}

console.log(person);

// Get property value using dot notation
const age = person.age
console.log(age); // 23


// Get property value using bracket notation
const city = person['city']
console.log(city); // Dhaka


// its error because of space in property name
// console.log(person.fav places); // 
// console.log(person.'fav places');


console.log(person['fav places']); // [ 'Coxs Bazar', 'Saint Martin', 'Kuakata' ]