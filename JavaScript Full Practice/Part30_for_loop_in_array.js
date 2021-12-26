// for loop in array

let fruits = ["apple","mango","grapes","banana"];
let fruitsUp=[];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    fruitsUp.push(fruits[i].toUpperCase());
}
console.log(fruitsUp);