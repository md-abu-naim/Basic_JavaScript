// ******************************************
//        Lerning Mixed Variables          //
// ******************************************

// Add Strings
var first = 'Mobarak'
var second = 'Tobarak'

const fullName = first + second

console.log(fullName); // MobarakTobarak


// + opartor convert Number to String
var ek = 10
var dui = "20"

var total = ek + dui
var sum = dui + ek

console.log(total); // 1020 as a String
console.log(sum); // 2010 as a String


// But -, *, /, % oparetors not convert number to string like
var minus1 = 10
var minus2 = '2'

var totalMinus = minus1 - minus2
var totalMinus2 = minus2 - minus1

console.log(totalMinus); // 8 as a number
console.log(totalMinus2); // -8 as a number


// Number() convert a String number to Number
var a = '10'
var num = Number(a)

console.log(num); // 10 as a number