// sort method
// ASCII TABLE
// char : ASCII value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

const userName = ["Lekhansh","Akshat","Yatharth","Vibhor","akshat"]; 
userName.sort(); // sorting done on the basis of ASCII values
console.log(userName);

const numbers = [42,5,12,51,2,1,14];
numbers.sort();
// it will manipulate the original array itself and it is considering the numbers as string while sorting it!!
console.log(numbers);

numbers.sort((a,b)=>{
    return a-b;
}); // sorted in ascending order

// a-b --> positive (greater than 0) --> b should be placed before a
// a-b --> negative (less than 0) --> a should be placed before b
// a-b === 0 then continue

console.log(numbers);

numbers.sort((a,b)=>{
    return b-a;
}); // sorted in descending order

console.log(numbers);

// price lowToHigh or highToLow
const products = [
    {productId: 1, productName: "p1", price:400},
    {productId: 2, productName: "p2", price:300},
    {productId: 3, productName: "p3", price:100},
    {productId: 4, productName: "p4", price:500},
    {productId: 5, productName: "p5", price:200}
];

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowToHigh);

// highToLow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(highToLow);