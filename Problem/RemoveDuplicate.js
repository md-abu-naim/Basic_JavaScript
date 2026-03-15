const biraniKhor = ['abul', 'babul', 'dabul', 'cabul', 'abul', 'babul']

function removeDuplicate(arr){
    const unique = []
    for(const item of arr){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique
}

console.log(removeDuplicate(biraniKhor)); // [ 'abul', 'babul', 'dabul', 'cabul' ]