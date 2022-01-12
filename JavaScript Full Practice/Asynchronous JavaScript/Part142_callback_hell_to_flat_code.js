// reducing the callback hell to flat code
// refer to callback-demo.html

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
        },time);
    });
}

const returnedPromise = changeText(heading1,"one","red",1000);
returnedPromise.then(()=>changeText(heading2,"two","purple",2000))
.then(()=>changeText(heading3,"three","red",2000))
.then(()=>changeText(heading4,"four","pink",1000))
.then(()=>changeText(heading5,"five","green",2000))
.then(()=>changeText(heading6,"six","blue",3000))
.then(()=>changeText(heading7,"seven","brown",1000))
.catch((error)=>alert(error));
   