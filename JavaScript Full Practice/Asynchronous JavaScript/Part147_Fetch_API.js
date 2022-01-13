// Fetch APIs
// Refer to xhr.html file

const URL="https://jsonplaceholder.typicode.com/posts";

fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'Akshat',
      body: 'Bhatnagar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response=>{
      console.log(response.json());
  })


const whatIsThis = fetch(URL); // it will return a promise by default it will perform "GET" request
console.log(whatIsThis); 

whatIsThis.then(response=>{
    // without this if else condition even if there is any error other than network issues the catch block will not execute
    if(response.ok){
        return response.json();  // it will also return a promise
    }else{
        throw new Error("Something went wrong!");
    }
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("catch block");
    console.log(error);
})

// Note: fetch() will catch errors only when there is any network issues


