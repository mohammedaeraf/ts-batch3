
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`); // ${}
}

printStatusCode(404);
printStatusCode("404");

type UserActiveStatus = boolean | string;

let userStatus: UserActiveStatus;
userStatus = true;
userStatus = "active";