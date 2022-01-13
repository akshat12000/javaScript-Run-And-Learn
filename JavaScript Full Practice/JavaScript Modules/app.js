import {firstName as fname} from './utils/fname.js'
import {age} from './utils/age.js'
import Per,{Person2} from './utils/person.js'

console.log(fname,age);

const person = new Per("Lekhansh","Bhatnagar",16);
const person2 = new Person2("Vibhor","Bhatnagar",20);
person.info();
person2.info();
