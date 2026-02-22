// ******************************************
//      JavaScript Lerning do while loop      //
// ******************************************

// while loop
let i = 0
while(i < 10){
    // console.log(i);
    i++
}

// do while loop
let n = 0
do{
    // console.log(0);
    n++
}
while(n < 10)


console.log('start');

setTimeout(() => {
    console.log('timeout');
}, 0)

Promise.resolve().then(() => {
    console.log('promise');
})

console.log('End');