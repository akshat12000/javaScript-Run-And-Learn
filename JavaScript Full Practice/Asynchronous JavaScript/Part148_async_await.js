// async await

const URL="https://jsonplaceholder.typicode.com/posts";

async function getPosts(){ // this function now will always return the promise!
    const response = await fetch(URL); // it wait until fetch is resolved
    if(!response.ok){ // now catch block will execute
        throw new Error("Something went wrong!"); 
    }
    const data = await response.json();
    // console.log(data);
    return data; // returning the promise with resolved value as "data"
}

getPosts()
    .then(data=> console.log(data))
    .catch(error=> console.log(error)) // again this will report error only if there are some network issues!

