
import {compose, pipe} from '/lodash/fp';
import { indexOf } from 'lodash';

// Functional programming  - is the process of 
// building software by composing pure functions that are predictable.

// first class citizens
// assign function as variable or pass it as an argument 
// can treat function in js like anyother variable.
function sayHello (){
    // return "hello";
    // 

}

function greet(fnMessage){
    console.log(fnMessage());

}

greet(sayHello);

//higher order functions//////// - takes a function as an argument.
//an example
let numbers = [1,2,3];

numbers.map(number => number * 2);

// fucntion composition //////////


let input =" JAVASCRIPT ";
let output = "<div>" + input.trim() + "</div>";

// two small reusable functions
const trim = str => str.trim();
const WrapInDiv = str => `<div>{$str}</div>`;

trim(input)

// const toLowerCase =str => str.toLowerCase;

// currying
// const wrap = type =>str => `<${type}>${str}</${str}>`;

// // commpsing an piping with lodash
// const transform = pipe(trim, toLowerCase, wrap("span"));
// console.log(transform(input));

// // immutability nce a object has been created it can never change
// // so what we do is create copies and update those new objects

// // updating objects//////////////
// const person = {name: "john", 
// adress:{ country: "usa",
//         city: "new york"

// }
// };
// // using object.assign
// const updated = Object.assign({}, person, {name: "Bob"});
// cosnole.log(updated);
// // spread operator copied all the properties of the person object.
// // when updating address have to do deep copy copy the person address then update 
// // address.
// const updated1 = {...person,

//     adress:{ ...person.adress,
//             city: "San fran"
//     },
//     name: "Bob"
// }
// // the exmple above is alittle bit messy for immutabilit so we do use
// // libraires for immutable data structures like immutable, mori and immer.

// // updating arrays ////////////


// const numbers =[1,2,3];
// // addingh  at a specific index eg.2
// const index = numbers.indexOf(2)
// const added = [
//     // slice returns a new array so we need to spread the current array.
//     ...numbers.slice(0,index),
//     4,
//     ...numbers.slice(index)
// ];

// // removing/////
// // remove all the elemnts taht arent 2.
// const removed = numbers.filter(n => n !==2);
// console.log(removed);

// // updating
// const updated =numbers.map(n => n === 2 ? 20 : n)
// cosnole.log(updated);
