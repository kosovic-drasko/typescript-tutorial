// const anchor=document.querySelector('a')!;
// console.log(anchor.href);

// const form=document.querySelector('.new-item-form')

// const type=document.querySelector('#type') as HTMLSelectElement;
// const details=document.querySelector('#details') as HTMLInputElement;
// const amount=document.querySelector('#amount') as HTMLInputElement;
// form?.addEventListener('submit',(e:Event)=>{
//     e.preventDefault();
//     console.log(
//         type.value,
//         details.value,
//         amount.valueAsNumber
//     )
// })

 class Invoice{
client:string;
details:string;
amount:number
 
constructor(c:string,d:string,a:number){
    this.client=c,
    this.details=d,
    this.amount=a
}
// format(){
//     return`$(this.client) posjeduje $(this.amunt) za $(this.details)`;
// }
 }
const invOne=new Invoice('drasko','radi na odrzavanju',400);
console.log(invOne);

invOne.client="marko";
console.log(invOne);
