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

//funkcije
let add=(a:number,b:number,c:number|string=10):void=>{
  console.log('iznos je:  ',a,b);
  console.log(c);
}
add(2,8,20);

const funkcija=(a:number,b:number):number=>{
  return a+b;

}
let result=funkcija(4,3);
console.log(result);
const izvrsi=(a:number,b:number)=>{
console.log(izvrsi);
}

// let logDetails:(obj:{name:string,age:number})=>void;
//   type person={name:string,age:number};
//   logDetails=(drasko:person)=>{
//     console.log(`$(drasko.name)`);
//   }
//   logDetails('gaga');

