// rest parameters

function myFunc(a,b,c,...restParams){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(restParams);
    console.log(...restParams);
}
myFunc(3,4,5,6,7,8,9);

function addAll(...nums){
    let sum = 0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}
console.log(addAll(1,2,3,4));
console.log(addAll(63,23,51));
