/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

function fourParams(num1, num2, num3, num4) {
    const multi1 = num1 * num2
    const multi2 = multi1 * num3
    const result = multi2 * num4
    return result
}

// console.log(fourParams(4, 2, 3, 4)); // 56


/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

 */


function oddEven(num) {
    if (num % 2 === 1) {
        return num * 2
    } else {
        return num / 2
    }
}

// console.log(oddEven(2)); // 1
// console.log(oddEven(3)); // 6


/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr, size) {
    let sum = 0
    for (const ar of arr) {
        sum = sum + ar
    }
    return sum / size
}

const arr = [5, 4, 7, 2]

// console.log(make_avg(arr, arr.length)); // 4.5


/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(strs) {
    let count = 0
    for (const str in strs) {
        if (strs[str] === '0') {
            count++
        }
    }
    return count
}

// console.log(count_zero('00100101'));


/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(num) {
    if (num % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(odd_even(3));
console.log(odd_even(4));