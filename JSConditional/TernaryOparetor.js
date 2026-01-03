// ******************************************
//      Lerning Ternary oparetor conditions    //
// ******************************************

const age = 17
// const age = 12

//  Full Code
if(age >= 18 ){
    console.log('You can do vote'); // if age >= 18
}
else{
    console.log('You can sleep'); // if age <= 17
}


// ShortHand > Ternary Oparetor
age >= 18 ? console.log('vote dio') : console.log('Ghumaw');


let price = 500
const leader = false

if(leader === true){
    price = 0
}else{
    price = price + 100
}

console.log(price); // if leader = true 0
console.log(price); // if leader = false 600

// Short Hand
price = leader === true ? 0 : price + 100