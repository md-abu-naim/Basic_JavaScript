// Learning Reverse method in string

const str = 'I am a Web Developer'

// reverse using for of loop
let reverse = ''
for (const st of str) {
    reverse = st + reverse
}

console.log(reverse); // repoleveD beW a ma I


// Reverse string using for loop
let rev = ''
for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    rev = letter + rev
}
console.log(rev); // repoleveD beW a ma I


// Reverse string using reverse method
const sentence = "I am a job seeker"
const reversed = sentence.split('').reverse().join('')

console.log(reversed); // rekees boj a ma I