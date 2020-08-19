
import {compose, pipe} from '/lodash/fp';
import { indexOf } from 'lodash';

// Functional programming  - is the process of building software by composing pure functions,

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

// fucntion composition

const trim = trim => str.trim();
const toLowerCase =str => str.toLowerCase;

// currying
const wrap = type =>str => `<${type}>${str}</${str}>`;

// commpsing an piping with lodash
const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));

// updating objects
const person = {name: "john", 
adress:{ country: "usa",
        city: "new york"

}
};
// using object.assign
const updated = Object.assign({}, person, {name: "Bob"});
cosnole.log(updated);
// spread operator copied all the properties of the person object.
// when updating address have to do deep copy copy the person address then update 
// address.
const updated1 = {...person,

    adress:{ ...person.adress,
            city: "San fran"
    },
    name: "Bob"
}
// updating arrays

const numbers =[1,2,3];
// addingh  at a specific index eg.2
const index = numbers.indexOf(2)
const added = [
    // slice returns a new array so we need to spread the current array.
    ...numbers.slice(0,index),
    4,
    ...numbers.slice(index)
];

// removing
const removed = numbers.filter(n => n !==2);
console.log(removed);

// updating
const updated =numbers.map(n => n === 2 ? 20 : n)
cosnole.log(updated);
