function isLeapYear(year){
    if(year % 4 === 0){
        return true
    }
    return false
}

console.log(isLeapYear(2026)); // ture
console.log(isLeapYear(2028)); // false