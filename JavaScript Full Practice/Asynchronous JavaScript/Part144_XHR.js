// Refer to xhr.html file
// XHR (XML HTTP Request)
// By default browser performs a GET request

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

// Step 1 --> use open method --> it will happen asynchronously
console.log(xhr.readyState); // 0

xhr.open("GET",URL);

xhr.onreadystatechange = function(){ // this method will keep track of readyState change and will execute for readyState 0 to 4
    console.log(xhr.readyState);
    if(xhr.readyState===4){ // readyState = 4 is final
        const response = xhr.response; // will give the response and it's type will be string
        const data = JSON.parse(response); // converting to JSON object
        console.log(data , typeof data);
    }
}

xhr.onload = function(){ // this will execute only when readyState = 4
    console.log(xhr.readyState,"hi from onload"); 
}

// Step 2 --> use send method
xhr.send();

// Note: statusCode will tell us the status of our HTTPRequests 
