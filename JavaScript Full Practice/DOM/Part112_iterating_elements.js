// iterating the elements
// simple for loop
// for of loop
// forEach --> cannot be used with HTMLCollection
// array like object ---> indexing, length property

let navItemList = document.getElementsByTagName("a"); // HTMLCollection

// for(let i=0;i<navItemList.length;i++){
//     console.log(navItemList[i]);
//     const navItem = navItemList[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight = "bold";
// }

for(let navItem of navItemList){
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight = "bold";   
}

// navItemList.forEach((navItem)=>{         ---> error
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight = "bold";   
// });

navItemList = Array.from(navItemList); // converting to array
console.log(Array.isArray(navItemList));
// now forEach method can also be used to iterate!


const navItems = document.querySelectorAll("a"); //NodeList
console.log(navItems);

console.log("for loop");
for(let i=0;i<navItems.length;i++){
    console.log(navItems[i]);
}

console.log("for of loop");
for(let navItem of navItems){
    console.log(navItem);
}

console.log("forEach loop");
navItems.forEach((navItem)=>{
    console.log(navItem);
})
