
import {compose, pipe} from '/lodash/fp';
import { indexOf } from 'lodash';

// Functional programming  - is the process of 
// building software by composing pure functions that are predictable.
// usually smaleer simpler functions to make a predicatble
// result

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

// just a reference to this variable.
greet(sayHello);

//higher order functions//////// - takes a function as an argument.
//an example
let numbers = [1,2,3];

numbers.map(number => number * 2);

// fucntion composition //////////
// WRIET A BUNCH OF SMALL AND USABLE FUNCTIONS THEN COMPOSE THEM TO USE 
// TO MAKE MORE COMPLEX FUNCTIONS TO SOLVE PROLEMS.

// Non functional style of programming.
let input =" JAVASCRIPT ";
let output = "<div>" + input.trim() + "</div>";

// funtional style of programming.
// two small reusable functions to make a more complex.
const trim = str => str.trim();
const WrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// this is  composed functiono made up of smaller funtions
// few problems its messy has lots of perenthisis and reads right to left;
// const result = WrapInDiv(toLowerCase(trim(input)));

// compising and piping //////
// just passing a reference from lodash to make all of the above 
// easier to use 
 const transform = pipe(trim,toLowerCase,WrapInDiv );
//  this is same as:
// const result = WrapInDiv(toLowerCase(trim(input)));
transform(input);






























// Es6 refresher - react course/////////////
// make own projects

//  this key word & bind /////

// const person = {
//     name: " Andrew",
//     bjj (){
//         // returning areferance to the persn object
//         console.log(this);
//     }
// }

// // bind determines the value of this.can set the value of this permamnently
// const jitsu = person.bjj.bind(person);
// console.log(jitsu); 

// // so now this stand alon function points to person.bjj function.
// // whcih point to the Bject of that method = person.
// jitsu();

// arrow functions

// const square =number=> {
//     return number * number;
// } 
//  single line arrow funtion with one reading
// const square =number=>  number * number;
// console.log(square(5));

// const jobs = [
//     {id:1 ,isActive:true},
//     {id:2 ,isActive:true},
//     {id:3 ,isActive:false},
// ]

// // clean arrow function syntax
// const activeJobs = jobs.filter(jobs=>jobs.isActive);
// console.log(activeJobs);

// // own example

// const shoes =[
//     {id: 1, shoeSize: 4, rating:5},
//     {id: 2, shoeSize: 8, rating:5},
//     {id: 3, shoeSize: 9, rating:5},
// ]

// const shoesize8 = shoes.filter( shoes => shoes.shoeSize>4);
// console.log(shoesize8);

// // Arrow fucntion and this - this inherits this in 
// // the contect in which the code isdefined

// cars = ["porsche", "ferrari", "GTR"];

// // const carList = cars.map(function(cars){
// //     return "<li>" + cars + "</li>";

// // })
// // cleaner syntax with arrow + template literal
// const carList = cars.map(cars=> `<li>${cars}</li>`

// )

// console.log(carList);

// // object destructuring ///////

// const address ={
//     street: "",
//     city: "",
//     country: ""
// };

// // const street = address.street;
// // const city = address.city;
// // const  country = address.country;

// const {street, city, country} = address;
// // usig an alias for street called st.
// const {street: st} = address;

// //  spread operator ////

// const first = [1,2,3,];
// const second = [4,5,6,];

// const combined = [...first,'a', ...second, 'b'];

// const object = {
//     name: 'Mosh'
// };
// const secondObj = {job:"instructor" };
// const comb = {...object,...secondObj};

// console.log(comb);

// // classes ////// inheritance

// class MainPerson {
//     constructor(name){
//        this.name = name;
//     }
  
//     walk(){
//         console.log(" im walking");
//     }
// }

// class MainPerson2 extends  MainPerson {
//     constructor(name){
//         super()
//         this.name = name;
//     }
//     conversation(){
//         console.log("I like making convo");
//     }
// }

// const newMain2 = new MainPerson2("andy");
// console.log(newMain2);



