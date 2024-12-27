type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

// Using Intersection
type PersonWithAddress = Person & Address;

// Example usage
const personWithAddress: PersonWithAddress = {
    name: "John",
    age: 30,
    street: "123 Main St",
    city: "New York",
};

console.log(personWithAddress.name);   // Output: John
console.log(personWithAddress.street); // Output: 123 Main St
