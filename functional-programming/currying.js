import _ from "lodash";
import {pipe} from "lodash";
// import { indexOf } from 'lodash';

// funtional style of programming.
// two small reusable functions to make a more complex.
const trim = str => str.trim();
const wrap = (str, type) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();


const transform = pipe(trim,toLowerCase,wrap );
console.log(transform(input));