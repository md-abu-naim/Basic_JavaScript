const today = new Date()
const date = new Date('2062-10-19')
console.log(date.getMonth()); // 9
console.log(date.getDay()); // 4

const specificDate = new Date(2090, 0, 26)
console.log(specificDate); // 2090-01-25T18:00:00.000Z

specificDate.setMonth(10)
console.log(specificDate); // 2090-11-25T18:00:00.000Z

console.log(specificDate.toLocaleDateString()); // 11/26/2090
console.log(specificDate.toLocaleDateString('en-GB')); // 26/11/2090
