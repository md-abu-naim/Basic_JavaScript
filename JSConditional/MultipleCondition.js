// ******************************************
//            Lerning multiple conditions    //
// ******************************************

const sellary = 5000
const isBCS = true
const height = 61

if(sellary > 2000 && height > 65){
    console.log('su patro');
}else {
    console.log('onnota lagbe'); // find it
}


if(sellary > 2000 || height > 65){
    console.log('su patro'); // find it
}else {
    console.log('onnota lagbe');
}

// More & more Conditions
if(sellary > 2000 || height > 65 && isBCS){
    console.log('su patro'); // find it
}else {
    console.log('onnota lagbe'); 
}


// Complex Conditions
if((sellary > 5000 && height > 65) || isBCS){
    console.log('su patro'); // find it
}else {
    console.log('onnota lagbe');
}