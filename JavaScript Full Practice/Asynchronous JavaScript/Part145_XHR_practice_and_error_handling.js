// XHR Practice and Error Handling
// Refer to xhr.html file

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload = ()=>{
    if(xhr.status>=200&&xhr.status<300){
        const response = xhr.response;
        const data = JSON.parse(response);
        // console.log(data);
        const id = data[3].id;
        console.log(id);
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        xhr2.open("GET",URL2);
        xhr2.onload = ()=>{
            const val = JSON.parse(xhr2.response);
            console.log(val);
        }
        xhr2.send();
    }else{
        console.log("Something went wrong!");
    }
}

xhr.onerror = ()=>{ // this will invoked when there are some network errors
    console.log("Network Error");
}

xhr.send();