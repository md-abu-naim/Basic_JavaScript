// Learing Join method in string

const friends = ['sabbir', 'habib', 'shuvo', 'shanto']

const realFrnd = friends.join()

console.log(realFrnd); // sabbir,habib,shuvo,shanto
console.log(friends.join(' ')); // sabbir habib shuvo shanto
console.log(friends.join('_')); // sabbir_habib_shuvo_shanto
console.log(friends.join('|')); // sabbir|habib|shuvo|shanto