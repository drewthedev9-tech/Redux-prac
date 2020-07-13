
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