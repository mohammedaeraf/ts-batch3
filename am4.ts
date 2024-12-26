class Vehicle {
    readonly brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    displayBrand(): void {
        console.log(`Brand: ${this.brand}`);
    }
}

const car = new Vehicle("Toyota");
console.log(car.brand); // "Toyota"
car.brand = "Honda"; 
