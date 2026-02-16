// ******************************************
//      JavaScript Lerning continue in loop      //
// ******************************************

for(let i = 1; i <= 10; i++){
    if(i % 2 == 1){
        continue
    }
    // console.log(i);
}

let i = 0
while(i < 50){
    i++
    if(i % 5 !== 0) {
        continue
    }
    console.log(i);
}