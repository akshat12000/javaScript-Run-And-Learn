// Function returning promise

function ricePromise(){
    const bucket = ["coffee","chips","vegetables","salt","rice"];

    // Returning a Promise
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
            resolve("Fried Rice"); // we can pass anything inside the resolve function       
        }else{
            reject("Couldn't make it due to missing ingredients"); // we can pass any thing inside reject function
        }
    });
}

ricePromise().then(
    (myFriedRice)=>{
        console.log("Lets eat",myFriedRice);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)
