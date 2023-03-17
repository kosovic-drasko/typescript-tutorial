"use strict";
let character = 'mario';
let characters = 'gaga';
character = 'lala';
//poruka
console.log(character);
console.log(characters);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
const ciril = (diameter) => {
    return diameter * Math.PI;
};
console.log(ciril(20));
let names = {
    name: 'drasko',
    age: 20
};
names.name = 'ana';
console.log(names);
let ninjas = [];
ninjas.push('luka');
console.log(ninjas);
let mixed = [];
mixed.push(20);
console.log(mixed);
let niz;
niz = { ime: 'luka', godine: 50 };
console.log(niz);
//funkcije
let add = (a, b, c = 10) => {
    console.log('iznos je:  ', a, b);
    console.log(c);
};
add(2, 8, 20);
const funkcija = (a, b) => {
    return a + b;
};
let result = funkcija(4, 3);
console.log(result);
const izvrsi = (a, b) => {
    console.log(izvrsi);
};
// let logDetails:(obj:{name:string,age:number})=>void;
//   type person={name:string,age:number};
//   logDetails=(drasko:person)=>{
//     console.log(`$(drasko.name)`);
//   }
//   logDetails('gaga');
