/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

// console.log(celsiusToFahrenheit(20)); // 68


/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */





/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */

function getVowels(str){
    const vowels = 'aeiouAEIOU'
    let count = 0 

    for(const st of str){
        if(vowels.includes(st)){
            count++
        }
    }
    return count
}

console.log(getVowels('akashbuio')); // 5