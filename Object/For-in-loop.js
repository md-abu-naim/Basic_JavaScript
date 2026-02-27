const mobile = {
    brand: 'apple',
    price: 270000,
    color: 'white',
    isNew: false
}

for(const prop in mobile){
    console.log(prop); // brand, price, color, isNew
    console.log(mobile[prop]); // brand: apple, price: 27000, color: white, isNew: false
}


const keys = Object.keys(mobile)
console.log(keys); // [ 'brand', 'price', 'color', 'isNew' ]

for(const key of keys){
    console.log(key); // brand, price, color, isNew
    console.log(mobile[key]); // // brand: apple, price: 27000, color: white, isNew: false
}