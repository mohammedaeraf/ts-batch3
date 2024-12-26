class Employee {
    public name: string; // Explicitly public
    age: number; // Implicitly public

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const emp = new Employee("Alice", 30);
console.log(emp.name); // Accessible
emp.displayInfo(); // Accessible
