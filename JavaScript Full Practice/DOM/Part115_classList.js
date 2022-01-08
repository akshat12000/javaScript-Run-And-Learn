// classList
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList); // DOMTokenList

sectionTodo.classList.add("bg-dark"); // it will add the class named "bg-dark"
console.log(sectionTodo.classList);

sectionTodo.classList.remove("container"); // it will remove the class named "container"
console.log(sectionTodo.classList);

// it tells wether a class is present in the element or not
console.log(sectionTodo.classList.contains("container"));
console.log(sectionTodo.classList.contains("bg-dark"));

sectionTodo.classList.toggle("bg-dark"); // since it was already present then this statement will remove this class
sectionTodo.classList.toggle("bg-dark"); // since it was not present, so, this statement will add this class to the element

