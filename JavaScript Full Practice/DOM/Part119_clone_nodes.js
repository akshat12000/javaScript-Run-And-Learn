// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="new Todo";

// here only one prepend will happen as it is overriding the append
ul.append(li);
ul.prepend(li);

const li2=li.cloneNode(true); // cloning the node and setting true means deep cloning other wise text inside it will not get cloned
ul.append(li2);