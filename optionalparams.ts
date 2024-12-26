function greet(name:string, greeting?: string): void {

    if (greeting) {
      console.log(`${greeting}! ${name}`);
    }
    else {
      console.log(`Hello ${name}`);
    }
  }

  // ASI ==> Automatic Semicolon insertion

  greet('Aeraf');  // not passing greeting; 
  greet('Aeraf', 'Hey'); // go to if
  
  