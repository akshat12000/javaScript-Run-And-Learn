// some old methods to support Internet Explorer
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const firstNode = document.querySelector(".first-todo"); // selecting <li>Todo 1</li>
li.textContent = "Last Todo";
li1.textContent = "Todo 2";
li2.textContent = "First Todo";

// See one line at a time below and comment out rest of them to see the results
ul.appendChild(li); // working similar to append

ul.insertBefore(li2,firstNode); // will insert the node before the firstNode

ul.replaceChild(li1,li); // will replace the "Last Todo" with "Todo 2"

ul.removeChild(firstNode); // will remove the li tag which says "Todo 1"
