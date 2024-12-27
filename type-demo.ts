type Point = {
  x: number;
  y: number;
};

let point1: Point = {
  x: 100,
  y: 201
}

let point2: Point = {
  x: 203,
  y: 206
}

console.log(point1);
console.log(point1.x);

type Employee = {
  name: string,
  id: number,
  age: number
}

const employe1: Employee = {
  name: 'John Doe',
  id: 101,
  age: 30
}

const employee2: Employee = {
  name: 'Sunita',
  id: 102,
  age: 34
}


type LoginResult = {
  status: boolean,
  message: string
}

let result: LoginResult = {
  status: true,
  message: 'Login Successfull'
}

result.message;