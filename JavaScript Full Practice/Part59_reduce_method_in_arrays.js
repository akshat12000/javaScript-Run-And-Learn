// reduce method
const numbers = [1,2,3,4,5];

// aim: sum of all the numbers in array
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);

// accumulator, currentValue, return 
//      1            2          3   --> first time call
//      3            3          6   --> second time call
//      6            4          10  --> third time call
//      10           5          15  --> fourth time call

const userCart = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000},
];

const sumPrice = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0); // intial value of totalPrice is set to 0
console.log(sumPrice);

// totalPrice, currentProduct, return
//     0             {}         12000   --> first time call 
//   12000          22000       34000   --> second time call
//   34000          15000       49000   --> third time call

