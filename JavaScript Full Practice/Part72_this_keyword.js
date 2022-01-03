console.log(this); // window object
console.log(window); // window object
console.log(this===window); 

function myFunc(){
    console.log(this); // window object
}
window.myFunc();
// or myFunc() will also result in same