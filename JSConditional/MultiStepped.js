// ******************************************
//      Lerning multi stapped conditions    //
// ******************************************


// const price = 5000
// const price = 5000
const price = 2000

if(price >= 5000) {
    const discount = price * 10 / 100
    const payAmmount = price - discount
    console.log(payAmmount); // if price >= 500
}
else if(price > 2000) {
    const discount = price * 5 / 100
    const payAmmount = price - discount
    console.log(payAmmount); // if price > 2000
}
else{
    console.log(price);     // if price = 2001-4999
}



// const age = 12
// const age = 17
const age = 60
const bill = 500

if(age <= 12) {
    console.log('You can it for free'); // if age <= 10
}
else if(age >= 60) {
    const discount = bill * 50 / 100
    const payAmmount = bill - discount
    console.log(payAmmount);            // if age >= 60
}
else {
    console.log(bill);                 // if age = 13-59
}