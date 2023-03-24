console.log(214, '214', 'hello', 'im here');

var name = 'carlos';
var Name = 'caloy';
var pi = 3.14;
var max_height = 10;

console.log(name, 'hellow', Name, pi, max_height);

var myVariable = 10;
var _moneyAmount = 100;
var $totalSales = 30213;
// var 4pairs = 48;

console.log(_moneyAmount, $totalSales);

console.log('Hello there, your sales is ', $totalSales);
console.log('Hello there: ' + name);
var myVariable = 100;
// declare using let keyword

let myNewVariable = 10;
console.log(myNewVariable);

myNewVariable = 200; // camelCase
console.log(myNewVariable);

let new_value = "new"; // snake_case

let AnotherVariable = 213 // Pascal Case
 
/**
 *  use const as much as possible
 *  if your value will change, use let
 *  never use var
 * 
 */

const myNewConstant = 10;

// myNewConstant = 100;

console.log(myNewConstant);

// operations: +  -  *  /  %  **  ++ --
let mySum = 5 + 3;
let myProduct = 5 * 2;
let myDifference = 10 - 1;
let myQuotient = 20 / 4;
let myModulo = 100 % 3;

let myOutput = mySum + myProduct + myQuotient;

console.log('Output is : ', myOutput);
myOutput++;  // myOutput = myOutput + 1;
console.log('Increment is :', myOutput);
myOutput--;   // myOutput = myOUtput - 1;
console.log('Decrement is :', myOutput);
console.log('The modulo is', myModulo);

const myTestModulo = 14721371;
let myOutputModulo = myTestModulo % 2;
console.log(myTestModulo, 'has a remainder of ', myOutputModulo);

// logical assigment operators: && (AND)   and   ||  (OR)   and   ! (NOT)   and == (EQUAL)
// boolean data type

let iAmLegendary = true;
console.log('iAmLegendary', iAmLegendary);

const amIReal = false;
const youllBeSafeHere = false;
console.log('amIReal', amIReal);
console.log('youllBeSafeHere', youllBeSafeHere);
console.log('AND', amIReal && youllBeSafeHere);
console.log('OR', amIReal || youllBeSafeHere);

let vanilla = true;
let mango = true;
let apple = false;
const tjOutput = !vanilla || (!mango && apple);
// true || (true && false)
// true || false
// true

// const tjOutput = !vanilla || (!mango && apple);
// not true || (not true && false)
// false || (false && false)
// false

// const tjOutput = !vanilla || !(mango && apple);
// not true || not (true && false)
// false || not (false)
// false || true
// true

console.log('Output of TJ is ', tjOutput);
console.log('Opposite is :', !tjOutput);


// conditional statments
// Determine if the variable myInputNumber is an odd or even number
// If the value is odd, say "ODD", otherwise, say "EVEN"

const myInputNumber = 283579;

/**
 * if (condition is true) {
 *  execute this code 
 * } else {
 *  execute this alternative code
 * } 
 *  */ 

// compare with == 
if (myInputNumber % 2 == 0) {
  console.log('EVEN');
} else {
  console.log('ODD');
}


// 
/**
 * Translate the value of the variable myGrade. If the value is less than 70, show 'F'
 * If the value is 70 up to 80, show D
 * If the value is 81 to 85, show C,
 * If the value if 86 to 90, show B,
 * If the value is 91 to 95, show A,
 * If the value is more than 96, show A+
 * If the value is more than 100, show 'ERROR'
 */
console.log("MY GRADE IS");
const myGrade = 55;
if (myGrade < 70) {
  console.log('F');
  console.log('ah bagsak!');
  let myTransmutedGrade = 'F';
  if (myGrade % 2 == 0) {
    console.log('Your grade is even');
  } else {
    console.log('Your grade is odd');
  }
} else if (myGrade >= 70 && myGrade <= 80) { // greater than or equal to, less than or equal to
  console.log('D');
} else if (myGrade >= 81 && myGrade <= 85) {
  console.log('C');
} else if (myGrade >= 86 && myGrade <= 90) {
  console.log('B');
} else if (myGrade >= 91 && myGrade <= 95) {
  console.log('A');
} else if (myGrade >= 96 && myGrade <= 100) {
  console.log('A+');
} else {
  console.log('Error');
}


// Math.random()
// Math.floor()
// random from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);


















