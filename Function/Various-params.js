function stringSized(str){
    const size = str.length
    return size
}
console.log(stringSized('Noakhali')); // 8


function doubleOrTriple(num, blen){
    if(blen == true){
        return num * 3
    }else{
        return num * 5
    }
}

console.log(doubleOrTriple(2, false)); // 10
console.log(doubleOrTriple(2, true)); // 6
