// ******************************************
//         Lerning Nested conditions        //
// ******************************************

// const money = 500
// const money = 200
// const money = 90
const money = 0

if(money >= 500){
    console.log('you are very rich'); // if money >= 500
}else{
    if(money > 100){
        console.log('You are gorib & rich'); // if money > 101-499
    }else {
        if(money > 0){
            console.log('Friend you are eating banana'); // if money = 1-99
        }else{
            console.log('you are not my friend');
        }
    }
}