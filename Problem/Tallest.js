const heights = [55, 77, 85, 25, 69, 96, 100]

function getMax(numbers){
    let max = numbers[0]
    for(const num of numbers){
        if(num > max) {
            max = num
        }
    }
    return max
}

// console.log(getMax(heights)); // 100