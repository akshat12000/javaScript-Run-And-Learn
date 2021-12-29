// default parameters

function addTwo(a,b=1){
    // if(b===undefined){
    //     b = 1;
    // }
    return a+b;
}
const ans = addTwo(4,5);
const res = addTwo(4);
console.log(ans);
console.log(res);