let character = 'mario';
let characters = 'gaga';
character='lala';
//poruka
console.log(character);
console.log(characters);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});
const ciril=(diameter:number)=>{
  return diameter*Math.PI;
} 
console.log(ciril(20));

let names={
  name:'drasko',
  age:20
}
names.name='ana';
console.log(names);

let ninjas:string[]=[];
ninjas.push('luka');
console.log(ninjas);
let mixed:any[]=[];
mixed.push(20);
console.log(mixed);

let niz:{ime:string,godine:number};
niz={ime:'luka',godine:50};
console.log(niz)