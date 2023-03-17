"use strict";
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
class Invoice {
    constructor(c, d, a) {
        this.client = c,
            this.details = d,
            this.amount = a;
    }
}
const invOne = new Invoice('drasko', 'radi na odrzavanju', 400);
console.log(invOne);
invOne.client = "marko";
console.log(invOne);
