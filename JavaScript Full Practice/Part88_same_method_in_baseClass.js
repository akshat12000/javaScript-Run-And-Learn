// same method in baseclass
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

// Dog inherits the property of Animal class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age); // using constructor of Animal class
        this.speed = speed;
    }
    sound(){
        console.log("Bark Bark..");
    }
    run(){
        console.log(`${this.name} is running at speed ${this.speed}kmph`)
    }
    eat(food){
        console.log(`Modified Eat: ${this.name} eats ${food}`);
    }
}

const dog = new Dog("Spike",18,45);
console.log(dog);
console.log(dog.name,dog.age,dog.speed);
dog.eat("bone"); // if this method is present in the subclass itself then it gets called otherwise it gets called from the super or base class (here Animal)
dog.sound();
dog.run();
