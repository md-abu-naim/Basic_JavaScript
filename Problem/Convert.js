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

// console.log(mileToKM(5)); // 8.0467

function kiloToMile(kilo){
    const mile = kilo * 0.621371
    return mile.toFixed(2)
}

console.log(kiloToMile(kiloToMile(15))); // 5.79