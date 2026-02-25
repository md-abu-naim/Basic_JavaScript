// Learning Get Value of an object

const person = {
    name: 'Naim',
    age: '23',
    city: 'Noakhali',
    profession: 'Web Developer',
    'fav places': ['Coxs Bazar', 'Saint Martin', 'Kuakata']
}

person.age = '24' // 24
person.city = 'Dhaka' // Dhaka
console.log(person);



const keyName = 'profession'
console.log(person[keyName]);


const propName = 'profession'
person[propName] = 'DevOPS '
console.log(person); // DevOPS