/*** File - tuples-real-world.ts ****/
/** Key Value Pair Tuple **/
var keyValuePair = ["age", 25];
console.log("Key: ".concat(keyValuePair[0], ", Value: ").concat(keyValuePair[1]));
var response = [200, "OK"];
console.log("Status: ".concat(response[0], ", Message: ").concat(response[1]));
function login(username, password) {
    if (username === "admin" && password === "pass5678") {
        return [true, "Login successful!"];
    }
    else {
        return [false, "Invalid credentials"];
    }
}
var result = login("admin", "pass5678");
console.log(result[1]);
