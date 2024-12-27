// Define an interface
interface Vehicle {
  make: string;
  model: string;
  year: number;

  // Method signature
  start(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  start(): void {
      console.log(`Starting the car: ${this.make} ${this.model}`);
  }
}

// Using the class
// Vehicle myCar = new Car("Toyota", "Corolla", 2021);
const myCar: Vehicle = new Car('Toyota', 'Corolla', 2021);
myCar.start();
