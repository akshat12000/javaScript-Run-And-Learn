// static list vs live list
// querySelectorAll will give us a static list
// all getElementsBy methods will give us a live list

const ul = document.querySelector(".todo-list"); 
const listItems = document.querySelectorAll(".todo-list li"); // static list
const newListItems = ul.getElementsByTagName("li"); // live list
const sixthLi = document.createElement("li");

sixthLi.textContent = "item 6";

ul.append(sixthLi);

console.log(listItems); // still showing NodeList consisting of 5 elements
console.log(newListItems); // this will show the HTMLCollection with 6 elements
