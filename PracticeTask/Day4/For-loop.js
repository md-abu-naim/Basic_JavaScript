/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for(let i = 0; i <= 60; i++){
    // console.log(i, 'I will invest at least 6 hrs every single day for next 60 days!');
}


/***

Find all the odd numbers from 61 to 100.

*/
for(let i = 61; i <= 100; i++){
    if(i % 2 == 1){
        // console.log(i);
    }
}


/***
Find all the even numbers from 78 to 98.

 */
for(let i = 78; i <= 98; i++){
    if(i % 2 == 0){
        // console.log(i);
    }
}


/***

Display sum of all the odd numbers from 81 to 131.

 */

let sum = 0
for(let i = 61; i <= 100; i++){
    if(i % 2 == 1){
        sum += i
        // console.log(i, sum);
    }
}

/***
 * Display sum of all the even numbers from 51 to 85.

 */
let sum1 = 0
for(let i = 51; i <= 85; i++){
    if(i % 2 == 0){
        sum1 += i
        console.log(i, sum1);
    }
}

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

for(let i = 0; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
} 


/***

Implement a countdown timer that counts down from 21 to 15.

 */

for(i = 21; i >= 15; i--){
    console.log(i);
}