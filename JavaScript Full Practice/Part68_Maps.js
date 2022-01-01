// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// difference between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, number, string

const person = new Map();
person.set('firstName','Akshat');
person.set('age',21);
person.set(1,'one'); // here 1 is a number not string
person.set([1,2,3],"oneTwoThree");

console.log(person);
console.log(person.get('firstName'),person.get('age'),person.get(1));
console.log(person.keys());

for(let key of person.keys()){
    console.log(key,person.get(key),typeof key);
}

for(let [key,value] of person){
    // console.log(item,Array.isArray(item));
    console.log(key,value);
}

const newUser = new Map([['firstName',"akshat"],['age',21]]);
console.log(newUser);

const person1 = {
    id:1,
    firstName: "akshat"
};
const userInfo = new Map();
userInfo.set(person1,{age:21,gender:"male"});
console.log(userInfo);
console.log(userInfo.get(person1).age);