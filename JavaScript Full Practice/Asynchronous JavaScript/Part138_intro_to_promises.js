// Promise
// Promises work asynchronously
// Promise is provided by the browser's Web APIs
// Then similar functionality will occur which involves the CALL STACK , eventloop and microtask queue

console.log("Script Start");

const bucket = ["coffee","chips","vegetables","salt","rice"];

// Creating a Promise
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
        resolve("Fried Rice"); // we can pass anything inside the resolve function       
    }else{
        reject("Couldn't make it due to missing ingredients"); // we can pass any thing inside reject function
    }
});

// Consuming the Promise
friedRicePromise.then(
    // promise is resolved
    (myFriedRice)=>{
        console.log("Lets eat",myFriedRice);
    },
    // promise is rejected
    // (error)=>{
    //     console.log(error);
    // }
).catch(
    // promise is rejected
    (error)=>{
        console.log(error)
    }
);

setTimeout(()=>{
    console.log("Hello from setTimeout");
},1000)

// Note: .then() and .catch() will be added in the microtask queue
// Note: microtask queue has higher priority than callback queue so statments inside .then() or .catch() will execute first then statments inside setTimeout() will execute!

for(let i=0;i<=100;i++){
    console.log(Math.random(),i);
}

console.log("Script End");