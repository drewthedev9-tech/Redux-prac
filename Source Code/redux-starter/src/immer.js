import {produce} from 'immer';

let book = Map({title: "harry potter"});

function publish(book){
  return produce(book, draftBook =>{
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
cosnole.log(updated);