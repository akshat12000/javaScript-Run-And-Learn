// synchronous vs asynchronous programming
// javaScript is synchronous and single threaded programming language

// synchronous programming --> lines will execute one by one 
console.log("script start");

for(let i = 1 ;i<10000;i++){ // blocking code because it is taking some time to execute
    console.log("inside for loop");
}

console.log("script end");

// asynchronous programming
// setTimeout function (comment out the next example before running this code)

console.log("script starts again");

setTimeout(()=>{ // setTimeout is provided by the browser's Web APIs
    console.log("hello world");
},1000); // --> 1000 is here the delay in milliseconds

console.log("script ends again");

// another example for setTimeout (comment this out while running the above example)
console.log("start...");

const id = setTimeout(()=>{   // and we can notice that it is not blocking our upcoming code
    console.log("inside setTimeout");
},0);

for(let i=0;i<100;i++){
    console.log("...");
}
console.log("setTimeout's id is",id); // setTimeout returns an id
console.log("...end");
clearTimeout(id); // this will prevent the setTimeout function with given id to execute!

// "inside setTimeout" will be printed at last because the callback inside setTimout was stored in the callback queue
// and callback queue will pop this element only when it finds that CALL STACK is free to take it which it will become after
// executing all the code after the setTimout function usage
