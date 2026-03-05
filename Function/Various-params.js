function stringSized(str){
    const size = str.length
    return size
}
// console.log(stringSized('Noakhali')); // 8


function doubleOrTriple(num, blen){
    if(blen == true){
        return num * 3
    }else{
        return num * 5
    }
}

// console.log(doubleOrTriple(2, false)); // 10
// console.log(doubleOrTriple(2, true)); // 6


function numberOfElements(arr){
    const len = arr.length
    return len
}

console.log(numberOfElements([52, 55, 74, 52])); // 4