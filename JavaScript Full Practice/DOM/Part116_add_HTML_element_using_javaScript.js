// Add new HTML element to page

// innerHTML to add html element
const todoList = document.querySelector(".todo-list");
todoList.innerHTML += "<li>New Todo</li>"
todoList.innerHTML += "<li>Teach Students</li>"
// Note: this has performance issues as browser will traverse whole list of elements again and again as we keep on adding a new element
// We can use this when we want entire innerHTML to change
 