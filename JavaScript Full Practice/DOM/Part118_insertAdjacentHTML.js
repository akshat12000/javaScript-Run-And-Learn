// elem.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>Teach Students</li>"); // working similar to append
todoList.insertAdjacentHTML("afterbegin","<li>Study javaScript</li>"); // working similar to prepend
todoList.insertAdjacentHTML("beforebegin","<h5>Before the list</h5>"); // working similar to before
todoList.insertAdjacentHTML("afterend","<h5>After the list</h5>"); // working similar to after