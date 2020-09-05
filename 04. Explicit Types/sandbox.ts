// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean

// a = 'hello' //Error
age = 30


// Arrays
// let ninjas: string[];// => Can not push if it was not inited with a value
let ninjas: string[] = []; // can use .push
// ninjas.push('123')

ninjas = ['a', 'b', 'c']



// Union types
let mixed: (string | number)[] = [];
mixed.push('hello')
mixed.push(123)
// mixed.push(false) //Error

let uid: string | number;
uid = '123';
uid = 123


// Objects
let ninjaOne: object;
ninjaOne = { name: 'abc', age: 30 }
ninjaOne = []// Array is a kind of object

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = { name: 'two', age: 21, beltColor: 'red' }
// ninjaTwo = { name: 'two', age: 21, beltColor: 'red', skills : 'fighting'} //Error
