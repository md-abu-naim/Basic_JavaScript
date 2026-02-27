const colleg = {
    name: 'jamiya',
    subject: ['Hedaya', 'Nahumir'],
    class: [11, 12, 23],
    unique: {
        color: 'blue',
        result: {
            GPA: 5,
            merit: 'top'
        }
    }
}
console.log(colleg.unique.color); // blue
console.log(colleg.unique.result.merit); // top

// You can change the value
const obj = colleg.unique.result.merit = 'top top top'
console.log(obj); // top top top

colleg.subject[1] = 'Meshkat'
console.log(colleg.subject); // [ 'Hedaya', 'Meshkat' ]



// You can delete object property
delete colleg.class
console.log(colleg);