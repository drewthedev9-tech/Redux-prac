import {map} from 'immutable';

let book = Map({title: "harry potter"});

function publish(book){
    return book.set("isPublished" = true);
}

book = publish(book);

cosnole.log(book);