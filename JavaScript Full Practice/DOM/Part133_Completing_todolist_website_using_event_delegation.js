// Completing our website
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); // to stop the page from refreshing after we submit the form
    const newTodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodotext}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    console.log("some")
    todoList.append(newLi);
    todoInput.value="";
});

// using event delegation
todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const currLi = e.target.parentNode.parentNode;
        currLi.remove();
    }
});