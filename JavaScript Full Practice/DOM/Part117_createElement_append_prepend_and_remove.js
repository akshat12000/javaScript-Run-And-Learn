// document.createElement()
// append
// prepend
// remove

const todoList = document.querySelector(".todo-list");

// it will create a new li element
const newTodoItem = document.createElement("li");
const newTodoItem2 = document.createElement("li");

// it will create a new text node
const newTodoItemText = document.createTextNode("Teach Students"); // or you can use newTodoItem.textContent = "Teach Students"
newTodoItem2.textContent="Study javaScript";

// appending the text node as child of li tag in the DOM tree
newTodoItem.append(newTodoItemText);
// this will result in <li>Teach Students</li>

// this will add our li tag in the last of our todo-list
todoList.append(newTodoItem);

// this will add our second li tag at the first of our todo-list
todoList.prepend(newTodoItem2);

// this will remove the li tag which says "Todo 1" from todo-list
const todos = document.querySelectorAll(".todo-list li");
todos[1].remove();

// before
const newHead = document.createElement("h5");
newHead.textContent = "Before our list";
todoList.before(newHead); // this will insert the newHead2 node just before todo-list

// after
const newHead2 = document.createElement("h5");
newHead2.textContent = "After our list";
todoList.after(newHead2); // this will insert the newHead2 node just after todo-list