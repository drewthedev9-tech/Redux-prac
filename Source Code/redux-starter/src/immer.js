import {produce} from 'immer';

let book = Map({title: "harry potter"});

function publish(book){
  // produce original state and second argument is new object and state.
  return produce(book, draftBook =>{
    // in here we have mutated code for new object
    // and state. 
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
cosnole.log(updated);

// in essence with immer it ooks liek we are mutating th orignal object 
// but with the prduce function we are making the second argument a procy 
// that crates a new object and we get use familiar syntax.
// other wise we can use spread opertor which gets tedious ir use immutable.js