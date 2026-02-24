// learing concat method in string

const firstName = 'Sabbir'
const lastName = 'Hossain'

// const fullName = firstName + lastName  // SabbirHossain
// const fullName = firstName + ' ' + lastName  // Sabbir Hossain
const FullName = firstName.concat(' ').concat(lastName) // Sabbir Hossain
const fullName = firstName.concat(' ', lastName) // Sabbir Hossain

console.log(fullName);