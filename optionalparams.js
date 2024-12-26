function greet(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, "! ").concat(name));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
// ASI ==> Automatic Semicolon insertion
greet('Aeraf'); // not passing greeting; 
greet('Aeraf', 'Hey'); // go to if
