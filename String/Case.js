

const madrasa = 'Jamiya Mohammadiya Khajuria Madrash'
console.log(madrasa);               // Jamiya Mohammadiya Khajuria Madrash
console.log(madrasa.toLowerCase()); // jamiya mohammadiya khajuria madrash
console.log(madrasa.toUpperCase()); // JAMIYA MOHAMMADIYA KHAJURIA MADRASH


const book = 'hedaya'
const subject = 'Hedaya'

if(book === subject){
    console.log('its okk');
}else{
    console.log('its not okk'); // its not okk
}

if(book.toLowerCase() === subject.toLowerCase()){
    console.log('its okkk'); // its okk
}else{
    console.log('its not okk');
}

if(book.toUpperCase() === subject.toUpperCase()){
    console.log('its okkk'); // its okk
}else{
    console.log('its not okk');
}



const water = 'water'
const drink = ' water'

if(water === drink){
    console.log('its okk');
}else{
    console.log('its not okk'); // its not okkk bcs have space
}

if(water.trim() === drink.trim()){
    console.log('its okk');  // its okk bcs not space
}else{
    console.log('its not okk'); 
}