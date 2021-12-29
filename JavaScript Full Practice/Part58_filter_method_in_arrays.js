// filter function
// callback function passed in filter should return either true or false

const numbers = [2,5,1,6,7,4];

const isEven = (number)=>{
    return number%2===0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const oddNumbers = numbers.filter((number)=>{
    return number%2!==0;
});
console.log(oddNumbers);

