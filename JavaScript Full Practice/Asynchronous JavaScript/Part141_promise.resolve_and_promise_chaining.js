// Promise.resolve
// Promise chaining

const myPromise = Promise.resolve(5);
myPromise.then((value)=>{
    console.log(value);
});

// "then" method always returns a promise

function myPromise2(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    });
}

// Promise Chaining
myPromise2()
    .then(value=>{
        console.log(value);
        value+="bar";
        return value; // it is returning the promise not the string!
        // return Promise.resolve(value) --> this is how it is treated internally
    })
    .then(value=>{
        // if the above return value was not there then the below will print undefined
        console.log(value);
        value+="foo";
        return value;
    })
    .then(value=>{
        console.log(value);
    })
