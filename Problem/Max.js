const salman = 74
const disha = 85

if(salman > disha){
    console.log('Salman get');
}else{
    console.log('disha get');
}

// Inside the function
function getMax(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

console.log(getMax(salman, disha));