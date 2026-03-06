/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

function fourParams(num1, num2, num3, num4){
    const multi1 = num1 * num2
    const multi2= multi1 * num3
    const result = multi2 * num4
    return result
}

console.log(fourParams(4, 2, 3, 4));