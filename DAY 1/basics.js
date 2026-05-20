// ================= Difference Between let, var, const =================

// let
// Cannot be redeclared
// Gives Reference Error before initialization 
// Can be reassigned

// var
// Can be redeclared
// Gives undefined before 
// Can be reassigned

// const
// Cannot be redeclared
// Cannot be reassigned

// ================= Sum of Two Integers =================

let a = 20;
let b = 30;

console.log(a + b);

// ================= Relation Between String and Integer =================

console.log("Vishv " + "Patel"); //Vishv Patel

console.log(5 + "4"); //54

// ================= Type Coercion =================

console.log("2" - 2); //0

// ================= User Input =================

// Browser Prompt
// let age = prompt("Enter Your Age");

// Node.js Prompt

const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");

console.log(name);

// ================= Swap Two Numbers =================

// Method 1: Using Third Variable

let x = 10;
let y = 20;

let temp = y;
y = x;
x = temp;

console.log(x, y);

// Method 2: Using Mathematics

let p = 10;
let q = 20;

p = p + q;
q = p - q;
p = p - q;

console.log(p, q);

// Method 3: Using Array Destructuring

let m = 10;
let n = 20;

[n, m] = [m, n];

console.log(m, n);