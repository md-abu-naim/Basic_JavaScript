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

// console.log(getVowels('akashbuio')); // 5



/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function findLongestWord(str){
    const words = str.split(' ')
    let longestWord = ''

    words.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word
        }
    })
    return longestWord
}

console.log(findLongestWord('I am learning Programming to become a programmer'));


/**
 * Task-5:
Generate a random number between 10 to 20.
 */

const randomNumber = Math.random() * (20 - 10 + 1) + 10
// console.log(randomNumber);