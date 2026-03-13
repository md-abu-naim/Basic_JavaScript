function sumOfNumbers(numbers) {
    let sum = 0
    for (const num of numbers) {
        sum = sum + num
    }
    return sum
}

const nums = sumOfNumbers([1, 4, 52, 85])
// console.log(nums); // 142


function evenNumberOfArray(num) {
    const even = []
    for (const n of num) {
        if (n % 2 === 0) {
            even.push(n)
        }
    }
    return even
}

// console.log(evenNumberOfArray([1, 4, 52, 85]));  [ 4, 52 ]


function sumEvenNumOfArray(nums) {
    let sum = 0
    for (const num of nums) {
        if (num % 2 === 0) {
            sum = sum + num
        }
    }
    return sum
}

console.log(sumEvenNumOfArray([1, 4, 52, 85])); // 56