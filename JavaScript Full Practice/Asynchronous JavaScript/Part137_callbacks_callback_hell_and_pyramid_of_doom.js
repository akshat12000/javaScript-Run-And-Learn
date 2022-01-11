// callbacks, callback hell, pyramid of doom
// asynchronous programming
// Refer to callback-demo.html file

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// Text     Delay   Color

// one       1s     Violet
// two       2s     Purple
// three     2s     Red
// four      1s     Pink
// five      2s     Green
// six       3s     Blue
// seven     1s     Brown 

// callback hell
// setTimeout(()=>{
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         },1000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000);

function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time);
}
// Pyramid of doom
changeText(heading1,"one","violet",1000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",2000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","green",2000,()=>{
                    changeText(heading6,"six","blue",3000,()=>{
                        changeText(heading7,"seven","brown",1000,()=>{
                            console.log("Done!");
                        },()=>{console.log("Element does not exists")});
                    },()=>{console.log("Element does not exists")});
                },()=>{console.log("Element does not exists")});
            },()=>{console.log("Element does not exists")});
        },()=>{console.log("Element does not exists")});
    },()=>{console.log("Element does not exists")});
},()=>{console.log("Element does not exists")});
