function oddAverage(numbers) {
    const odds = []
    let sum = 0
    for (const odd of numbers) {
        if (odd % 2 === 1) {
            odds.push(odd)
        }
    }

    for (const number of odds) {
        sum = sum + number
    }

    const length = odds.length
    const average = sum / length
    return average
}

const numbers = [51, 41, 66, 88, 33, 1]
console.log(oddAverage(numbers)); // 31.5