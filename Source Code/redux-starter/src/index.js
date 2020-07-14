
import {compose, pipe} from '/lodash/fp';

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

//higher order functions////////
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

// immutability

