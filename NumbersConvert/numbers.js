// ******************************************
//  Lerning String convert to  Numbers     //
// ******************************************

var applePrice = 50;
var Chocolate = 40
var dragonPrice = '85'

console.log(typeof applePrice);
console.log(typeof dragonPrice);

console.log(applePrice + Chocolate);
console.log(applePrice + dragonPrice);



// Convert String to Number by parseInt()
var orangePrice = 22;
var orange = 22.5;
var lebu = parseInt('20')
var kochu = parseInt('20.5')
var komola = parseInt('sfasadf')

console.log(lebu); // 20 as a number
console.log(kochu); // 20 ase number with parseInt
console.log(komola); // NaN: not a number


// Convert String to Number by parseFlot()
var amm = 45
var khathal = 50.4
var jaam = parseFloat('258')
var alu = parseFloat('258.54')
var nei = parseFloat('sajfddas')

console.log(jaam);  // 258 as a number
console.log(alu);  // 258.54 as a number with parseFloat
console.log(nei); // NaN: not convert a number



// parseFlot issu fixed by toFixed(0 - 20)
var first = 0.1
var second = 0.2 
var total = first + second

console.log(total); // 0.30000000000000004
console.log(total.toFixed(2)); // 0.30  but it's got String


var vag = 5 / 0

console.log(vag); // Infinity