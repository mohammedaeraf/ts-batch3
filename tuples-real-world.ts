/*** File - tuples-real-world.ts ****/

/** Key Value Pair Tuple **/
let keyValuePair: [string, number] = ["age", 25];
console.log(`Key: ${keyValuePair[0]}, Value: ${keyValuePair[1]}`);


/** API Response Tuple **/
type ApiResponse = [number, string];
const response: ApiResponse = [200, "OK"];
console.log(`Status: ${response[0]}, Message: ${response[1]}`);


/** Login Result Tuple **/
type LoginResult = [boolean, string];
function login(username: string, password: string): LoginResult {
    if (username === "admin" && password === "pass5678") {
        return [true, "Login successful!"];
    } else {
        return [false, "Invalid credentials"];
    }
}
const result = login("admin", "pass5678");
console.log(result[1]); 