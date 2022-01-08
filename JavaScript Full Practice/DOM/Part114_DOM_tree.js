// Refer to index2.html
// DOM Tree

//                         document  --> Root Node
//                             |
//                            html --> child Node of document
//                           / |  \
//                          /  NS  \
//       text node <-- NS-head-NS   body   
//                       / |  \     / | \
//                      /  NS  \  NS  |  NS
//                   title  script   div - p 
//                     |            / | \   \
//              Dom Traversing    NS  h1 NS Some useful information
//                                    |
//                                My Heading

// Note: Here NS denotes the newline character "\n" and space " "

const rootNode = document.getRootNode();
console.log(rootNode);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

console.log(htmlElementNode.childNodes);

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);

const textNode1 = htmlElementNode.childNodes[1];
console.log(textNode1);

const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);

console.log(headElementNode.parentNode);

// sibling relation
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextElementSibling); // this will give the next sibling which is an html element 

// Note: these spaces and newlines are not reflected in the website because by default browser sets the white-spacing property to normal

console.log(headElementNode.childNodes);

// selecting the h1 and moving to the parent node and changing it's background and text color
const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color="#efefef";
div.style.backgroundColor="#333";

const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title,title.childNodes);

const container = document.querySelector(".container");
console.log(container.children); // will contain only the html elements no text element