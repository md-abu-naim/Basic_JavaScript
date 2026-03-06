function inceToFeet(inc){
    const feet = inc / 12
    return feet
}

// console.log(inceToFeet(75)); // 6.25


function inceToFeet2(ince){
    const feetFraction = ince / 12
    const fetInte = parseInt(feetFraction)
    const feetRe = ince % 12
    const feet = fetInte + ' ft ' + feetRe + ' ince '
    return feet
}

// console.log(inceToFeet2(68)); // 5 ft 8 ince 


function mileToKM(mile){
    const kilo  = mile * 1.60934
    return kilo
}

console.log(mileToKM(5));