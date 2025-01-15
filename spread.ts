const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Copying an array
const copyArr = [...arr1];
console.log('Copy of arr1:', copyArr); // Output: [1, 2, 3]

// Merging two arrays
const mergedArr = [...arr1, ...arr2];
console.log('Merged Array:', mergedArr); // Output: [1, 2, 3, 4, 5, 6]



const obj1 = { id: 1, name: 'John' };
const obj2 = { age: 25, city: 'New York' };

// Copying an object
const copyObj = { ...obj1 };
console.log('Copy of obj1:', copyObj); // Output: { id: 1, name: 'John' }

// Merging two objects
const mergedObj = { ...obj1, ...obj2 };
console.log('Merged Object:', mergedObj); 
// Output: { id: 1, name: 'John', age: 25, city: 'New York' }



function sum(a: number, b: number, c: number): number {
    return a + b + c;
  }
  
  const numbers: [number, number, number] = [10, 20, 30];
  console.log('Sum:', sum(...numbers)); // Output: 60
  


  const fruits = ['apple', 'banana'];
  const newFruits = [...fruits, 'orange', 'grape'];
  console.log('New Fruits:', newFruits); 
  // Output: ['apple', 'banana', 'orange', 'grape']
  

  const product = { id: 1, name: 'Laptop', price: 1000 };

// Update product price immutably
const updatedProduct = { ...product, price: 1200 };
console.log('Updated Product:', updatedProduct); 
// Output: { id: 1, name: 'Laptop', price: 1200 }
