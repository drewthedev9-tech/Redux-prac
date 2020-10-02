// Map function from immutable.js
import {Map} from 'immutable';

// Map immutable datat structure///
let book = Map({title: "harry potter"});

function publish(book){
    // all bunch of API syntax for immutable.js
    // set returns a new object because they are immutable.
    return book.set("isPublished" = true);
}

book = publish(book);

cosnole.log(book);

// you have to use the API syntax and requires alot of new learning to 
// search objects etc.