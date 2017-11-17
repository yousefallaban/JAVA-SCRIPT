//1- sum of three arguments

function sumArguments() {
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}
console.log(sumArguments(1, 5, 9));
console.log(sumArguments(10, 5, 4));

//2- Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  console.log('a '+ color + ' car');
}
colorCar('white');

// 3- Create an object and a function that takes the object as a parameter and prints out all of its classInfo and values.

function hfy() {
  const classInfo = [
    { name: 'Yusef', age: 25 },
    { name: 'Johen', age: 22 },
    { name: 'Allex', age: 18 },
    { name: 'Marks', age: 24 },
    { name: 'jolia', age: 21 },
    { name: 'rodie', age: 27 },
    { name: 'Jakso', age: 27 }
  ];

  for (let i = 0; i < classInfo.length; i++) {
    console.log('The Name is :', classInfo[i].name, '      The Age is : ', classInfo[i].age);
  }
}
hfy();

// 4- Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType('blue', 2)

function vehicleType(color, code) {
  if (code === 2) {
    console.log('a ' + color + ' motorbike');
  }
  if (code === 1) {
    console.log('a ' + color + ' car');
  }
  if (code > 2 || typeof (code) === 'string' || typeof (code) == 'undefined') {
    console.log('Please inter the wright code');
  }
}
vehicleType('blue', 2);

// 5- write the following without the if statement, but with just as a single line with console.log(...);?

const x = 3;
const y = 3;
console.log(x == y);

// 6- Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"

function vehicle(color, code, age) {
  if (code === 2 && age > 0) {
    console.log('a ' + color + ' used motorbike');
  }
  if (code === 1 && age > 0) {
    console.log('a ' + color + ' used car');
  }
  if (code > 2 || typeof (code) === 'string' || typeof (code) == 'undefined') {
    console.log('Please inter the wright code');
  }
  if (age <= 0 || typeof (age) === 'string' || typeof (age) == 'undefined') {
    console.log('Please inter the age');
  }

}
vehicle('red', 1, 2);

// 7- Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
// 8- How do you get the third element from that list?

function listOfVehicles() {
  const data = [
    { type: 'motorbike', color: 'red', age: 5 },
    { type: 'bike', color: 'black', age: 2 },
    { type: 'car', color: 'white', age: 3 },
    { type: 'caravan', color: 'blue', age: 1 }
  ];
  for (let i = 0; i < data.length; i++) {
    console.log('The third element is :', 'Type:', data[i].type, '  color:', data[i].color, '  Age:', data[i].age);
      break;
  }
  
}
listOfVehicles();

//9 - Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".

function listOfVehicles() {
  const data = [
    { type: 'motorbike', color: 'red', age: 1, code: 1 },
    { type: 'bike', color: 'black', age: 2, code: 1 },
    { type: 'car', color: 'white', age: 3, code: 2 },
    { type: 'caravan', color: 'blue', age: 1, code: 2 }
  ];
  for (let i = 0; i < data.length; i++) {
    if (data[i].age <= 1) {
      data[i].age ='new';
      console.log('a', data[i].color, data[i].age, '', data[i].type);
    } if (data[i].age > 1) {
      data[i].age = 'old';
      console.log('a', data[i].color, data[i].age, '', data[i].type);
    }
     
  }

}
listOfVehicles();

// 10- Use the list of vehicles to write an advertisement. 
// 11- What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?

function listOfVehicles() {
  const data = [
    { type: 'motorbike', color: 'red', age: 1, code: 1 },
    { type: 'bike', color: 'black', age: 2, code: 1 },
    { type: 'car', color: 'white', age: 3, code: 2 },
    { type: 'caravan', color: 'blue', age: 1, code: 2 }
  ];
  let output = '';
  for (let i = 0; i < data.length; i++) {
    output += data[i].type + ', ';
  }
  console.log('Amazing Joe\'s Garage, we service a ', output);
}
listOfVehicles(); 

// 12- 13- 14

const teachers = [
  { name: 'Frank Versnel', language: 'debugging' },
  { name: 'Jim', language: 'Java Script' },
  { name: 'unmeshjoshi', language: 'CLI Linux' },
  { name: 'ze_german', language: 'HTML/CSS' },
  { name: 'Ivana Setiawan', language: 'HTML/CSS' }

];


// 15- write a function that takes another function as an argument.

function foo(func) {
  // What to do here? 
  bar(func);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// 16- test two arrays for equality using == and ===
//x == y, x === y and z == y and z == x

 const x = [1, 2, 3];
 const y = [1, 2, 3];
 const z = y;

 if (x == y) {
   console.log(' x equal to  y ');
 }
 if (x === y) {
   console.log(' x equal to  y ');
 }
 if (x !== y) {
   console.log(' x not equal to y ');
 }
 if (z == y) {
   console.log(' z equal to y ');
 }
 if (z !== y) {
   console.log(' z not equal to y ');
 }
 if (z === x) {
   console.log(' z equal to x ');
 }
 if (z !== x) {
   console.log(' z not equal to x ');
 }

// 17- Does the order that you assign (o3 = o2 or o2 = o3) matter?

let o1 = {
  foo: 'bar'
};
console.log(o1);
let o2 = {
  foo: 'bar'
};
console.log(o2);
let o3 = o2 ;
console.log(o3);

/*
that assignment order matters because of if we change 
the position 'o2' has already been declared
*/

// 18- What does the following code return? (And why)?

 const bar = 23;
 typeof typeof bar;
 console.log(typeof typeof bar);

 /*
 we are checking the typeof "typeof", that 's why it returned string.
 typeof bar returns a string representation of the type of bar.So, naturally, typeof typeof bar is string.
 */