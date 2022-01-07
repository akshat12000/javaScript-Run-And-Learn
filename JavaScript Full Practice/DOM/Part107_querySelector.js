// select element using querySelector()

// returns a html element in the form of object with the id="main-heading"
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

// returns a html element in the form of object with the class="header"
const header = document.querySelector(".header");
console.log(header);

// returns a html element in the form of object with the class="nav-item"
// although there are multiple html elements with class = "nav-item" this will only select the first element
const navItem = document.querySelector(".nav-item");
console.log(navItem);

// returns an array like structure (not exactly an array) of html elements in the form of objects with the class="nav-item"
const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);