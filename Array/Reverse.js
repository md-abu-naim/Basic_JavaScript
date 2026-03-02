// Reverse array

const numbers = [555, 8555, 522, 47]

// numbers.reverse()
// console.log(numbers); // [ 47, 522, 8555, 555 ]

const reverse = []
for (const num of numbers){
    reverse.unshift(num)
}

// console.log(reverse);

const reve = []
for (let i = 0; i < numbers.length; i++){
    const num = numbers[i]
    reve.unshift(num)
}
console.log(reve);