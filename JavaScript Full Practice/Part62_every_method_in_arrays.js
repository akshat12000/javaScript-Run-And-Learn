// every method
const numbers = [2,4,6,8,11];

const ans =numbers.every((number)=>{
    return number%2===0;
});
// callback function is returning either true or false

// every method --> true(when every element gives true) else false
console.log(ans);

const userCart = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000},
];

// check if every product has price less than 30000 or not

const valid = userCart.every((cartItem)=>{
    return cartItem.price < 30000;
});
console.log(valid);