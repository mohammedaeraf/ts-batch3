enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
}

function handleResponse(status: HttpStatus) {
    switch (status) {
        case HttpStatus.OK:
            console.log("Request was successful.");
            break;
        case HttpStatus.NotFound:
            console.log("Resource not found.");
            break;
        case HttpStatus.InternalServerError:
            console.log("Server error occurred.");
            break;
        default:
            console.log("Unhandled status code.");
    }
}

handleResponse(HttpStatus.NotFound); // Output: Request was successful.
