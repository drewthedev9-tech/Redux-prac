// immutability nce a object has been created it can never change
// so what we do is create copies and update those new objects

// updating objects//////////////
const person = {name: "john", 
adress:{ country: "usa",
        city: "new york"

}
};
// using object.assign
// {} = empty object
// object assign method copy content of an object
// overides the name property in the new obect.
const updated = Object.assign({}, person, {name: "Bob", age:30});
console.log( "first" + updated);
// spread operator copied all the properties of the person object.
// when updating address have to do deep copy copy the person address then update 
// address.
const updated1 = {...person,
    //  deep copy
    adress:{ ...person.adress,
            city: "San fran"
    },
    name: "Bob"
}

console.log("updated1",updated1);
// the exmple above is alittle bit messy for immutabilit so we do use
// libraires for immutable data structures like immutable, mori and immer.

// updating arrays ////////////


const numbers =[1,2,3];
// adding  at a specific index eg.2
const index = numbers.indexOf(2)
const added = [
    // slice returns a new array so we need to spread to get the original.
    ...numbers.slice(0,index),//1
    4,
    ...numbers.slice(index) // 2,3 from index1 onwards
];
console.log("added",[added]);
console.log(" index",numbers.indexOf(2));

// removing/////
// remove all the elemnts taht arent 2.
const removed = numbers.filter(n => n !==2);
console.log(removed);

// updating
const updated2 =numbers.map(n => n === 2 ? 20 : n)
console.log(updated2);