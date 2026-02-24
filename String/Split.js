// Learning Split method in string

const sentence = 'I am s student of programming'

console.log(sentence); //'I am s student of programming'
console.log(sentence.split()); //[ 'I am s student of programming' ]
console.log(sentence.split('')); // [ 'I', ' ', 'a', 'm', ' ', 's', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', ' ', 'o', 'f', ' ', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'n', 'g' ]
console.log(sentence.split(' ')); // [ 'I', 'am', 's', 'student', 'of', 'programming' ]
console.log(sentence.split('a')); // [ 'I ', 'm s student of progr', 'mming' ]


const frindsStr = 'sabbir, habib, shuvo, shanto'

const friends = frindsStr.split(', ')
console.log(friends);