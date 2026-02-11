/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

let num = 1
while (num <= 60) {
    // console.log(num, 'I will invest at least 6 hrs every single day for next 60 days!');
    num++
}


/***

Find all the odd numbers from 61 to 100.

*/

let odd = 61
while (odd <= 100) {
    // if(odd % 2 === 1) console.log(odd);
    odd++
}


/***
Find all the even numbers from 78 to 98.

 */

let even = 61
while (even <= 100) {
    if (even % 2 === 0) {
        // console.log(even);
    }
    even++
}




/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sumOdd = 81
let total = 0
while (sumOdd <= 131) {
    if (sumOdd % 2 === 1) {
        total = total + sumOdd
        // console.log(sumOdd, total);
    }
    sumOdd++
}



/**
Display sum of all the even numbers from 206 to 311.

 */
let sumEven = 206
let sumTotal = 0
while (sumEven <= 311) {
    if (sumEven % 2 === 0) {
        sumTotal = sumTotal + sumEven
        // console.log(sumEven, sumTotal);
    }
    sumEven++
}


/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


let i = 1;

while (i <= 10) {
//   console.log(`5 x ${i} = ${5 * i}`);
  i++;
}


/***

Implement a countdown timer that counts down from 21 to 15.

 */



let s = 21
while(s >= 15){
    console.log(s);
    s--
}