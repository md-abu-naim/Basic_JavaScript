// Learning javaScript sort method

const friends = ['elon', 'mask', 'bill', 'mark']

const sorted = friends.sort()
console.log(sorted); // [ 'bill', 'elon', 'mark', 'mask' ]


const numbers = [225, 5,88, 855, 10, 4, 1, 57]

const sort_acs = numbers.sort((a, b) => a - b)  // [ 1,  4,   5,  10, 57, 88, 225, 855 ]
console.log(sort_acs);

const sort_dsc = numbers.sort((a, b) => b - a)  // [ 855, 225, 88, 57, 10,   5,  4,  1
console.log(sort_dsc)