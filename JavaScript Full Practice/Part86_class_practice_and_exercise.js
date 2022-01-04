// Create a class named "Animal" with properties as "name" & "age" and a method "eat".

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(food){
        console.log(`${this.name} eats ${food}`)
    }
}

const animal1 = new Animal("Tom",14);
const animal2 = new Animal("Puffy",15);

console.log(animal1);
animal1.eat("Bone");
console.log(animal1.name,animal1.age);

console.log(animal2);
animal2.eat("Bread");
console.log(animal2.name,animal2.age);

