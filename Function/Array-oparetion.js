function sumOfNumbers(numbers){
    let sum = 0
    for(const num of numbers){
        sum = sum + num
    }
    return sum
}

const nums = sumOfNumbers([1, 4, 52, 85])
console.log(nums); // 142