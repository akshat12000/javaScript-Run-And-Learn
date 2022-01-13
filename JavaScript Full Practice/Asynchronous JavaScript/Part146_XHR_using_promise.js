// XHR using Promises 
// Refer to xhr.html

const URL="https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,url){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status>=200&xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong!"));
            }
        }
        xhr.onerror = function(){
            reject(new Error("Something went wrong!"));
        }
        xhr.send();
    })
}

sendRequest("GET",URL)
    .then(response=>{
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data=>{
        // console.log(data);
       const id = data[3].id;
       return id;
    })
    .then(id=>{
        // console.log(id);
        const url = `${URL}/${id}`;
        return sendRequest("GET",url);
    })
    .then(newResponse=>{
        console.log(newResponse);
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error=>{
        console.log(error);
    })