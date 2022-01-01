// splice method
// start, delete, insert

const myArray = ["item1","item2","item3"];

// delete
const deletedItem = myArray.splice(1,1); // it will change the original array
// deleting the element starting from the index 1 and no. of elements to be deleted is also one
console.log(myArray);
console.log(deletedItem);

// insert
myArray.splice(1,0,"inserted item"); // inserting element into index 1
console.log(myArray);

// insert and delete simultaneously
myArray.splice(1,2,"inserted item1","inserted item2");
console.log(myArray);