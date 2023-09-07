const person = {
    name: 'Ariful',
    profession: 'web Developer',
    age: 30,
    25: 'Shoriful',
    "son-name": 'Arifulaar',
    address: 'Ranihati'
}

// dot notation
const prof1 = person.profession;
console.log(prof1);

// bracket notation
/* const prof2 = person['address']
console.log(prof2); */

// bracket notation
const prof2 = person['address']
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3);
console.log(prof2);

const season = person[25];
console.log(season);

const season1 = person['son-name'];
console.log(season1);
