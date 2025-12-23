// var 

var age // Declaration
age = 30; // Initialization

var age = 70; // Re - Declaration
age = 80;  // Re - Initialization

console.log(age);

// let 

let age1; // Declaration
age1 = 20; // Initialization

// let age1;  // Re - Declaration
age1 = 30; // Re - Initialization

console.log(age1);

// const 

const age2 = 30;  // Declaration and Initialization
// const age2;  // Declaration
// age2 = 20; // Initialization
// const age2;  // Re - Declaration
// age2 = 40;  // Re - Initialization

console.log(age2);

// Data Types in Javascript = 2 types

// Primitive Data type : string , Number, Boolean , Null , Undefined , BigInt

// Non - Primitive Data type : Array, object , date

var name = "Mohan"; // String
var age = 25; // Number
var areYouStudent = true; // boolean
var nothing = null; // Null
var notDefined ; // Undefined
var hobbies = ["reading","playing", "gaming"] // array
var person = { name : "mohan", age : 20, location : "Bangalore"}; // object
var date = new Date(); // date
var BigNumber = BigInt(21435456887575635325487698684642523); // Bigint

// printing data types

console.log(name);
console.log(age);
console.log(areYouStudent);
console.log(nothing);
console.log(notDefined);
console.log(hobbies);
console.log(person);
console.log(date);
console.log(BigNumber);