function isLeapYear(year){
    if(year % 4 === 0){
        return true
    }
    return false
}

// console.log(isLeapYear(2026)); // false
// console.log(isLeapYear(2028)); // true



function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    if(year % 400 === 0){
        return true
    }
    return false
}

console.log(isLeapYear(2026)); // false
console.log(isLeapYear(2072)); // true