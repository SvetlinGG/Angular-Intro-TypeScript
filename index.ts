let helloMsg: string = 'Hello, there';
let a: number = 123;
let b: number = 5;

let isAuthenticate: boolean = false;

const arr: number [] = [1, 2, 3, 4, 5];
console.log(arr.filter((n) => n > 3));

let x: number | string = 123;

// interface User ={
//     name: string,
//     age: number,
//     address?: string

// }
type User = {
    name: string, 
    age: number
    address?: string

};

const peshoUser: User = {
    name: 'Pesho',
    age: 20,
    address: 'Sofia'

};

function getIdentity<T>(id: T) {
    console.log('The type of id is' + typeof id);
    
}
getIdentity<number>(123);

function printLabel(lebelledObj: {label: string}){
    console.log(labelledObj.label);
    
}
let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);