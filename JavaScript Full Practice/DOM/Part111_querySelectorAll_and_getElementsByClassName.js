// get multiple elements using getElements by class name
const navItemList = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItemList); // will give an array like objects consisting of desired elements
console.log(navItemList[0],navItemList[1],navItemList[2]);
console.log(typeof navItemList);
console.log(Array.isArray(navItemList)); // not an array

// get multiple elements using querySelectorAll
const navItems = document.querySelectorAll(".nav-item"); //NodeList
console.log(navItems); // will give an array like objects consisting of desired elements
console.log(navItems[0],navItems[1],navItems[2]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));

