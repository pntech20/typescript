let stringArr = ['one', 'two', 'three'];
stringArr.push('four');
// stringArr.push(4); // Error
// stringArr = 'hola'; // Error

let numArr = [1, 2, 3];
numArr.push(4);
// numArr.push('four'); // Error

let mixArr = [1, 2, 'three'];
mixArr.push(4);
mixArr.push('four');
mixArr[0] = 'zero'
// mixArr.push(false) // Error


let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
}

ninja.age = 40;
ninja['name'] = 'new name';
// ninja.age = '30' // Error
// ninja.skills = ['fighting', 'sneaking'] // Error

// ninja = [] // Error

ninja = {
  name: 'a',
  belt: 'b',
  age: 5
}

// ninja = {
//   name: 'a',
//   belt: 'b'
// } // Error


// ninja = {
//   name: 'a',
//   belt: 'b',
//   newAttribute: 5
// } // Error