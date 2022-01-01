// some method

const numbers = [3,5,6,9];
// check whether atleast one element is even or not

const ans = numbers.some((number)=>{
    return number % 2 === 0;
});
console.log(ans);

const userCart = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000},
];

const res = userCart.some((cartItem)=>{
    return cartItem.price<14000;
});
console.log(res);

