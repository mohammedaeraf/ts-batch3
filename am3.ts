class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}
// inheritance - Dog inherits the prop 'name'
class Dog extends Animal {
    public bark(): void {
        console.log(`${this.name} is barking!`); // Accessible in subclass
    }
}

const dog = new Dog("Buddy");
dog.bark(); // "Buddy is barking!"
console.log(dog.name); 
