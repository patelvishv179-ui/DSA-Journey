# Day 1 - JavaScript Basics

## Difference Between let, var and const

### let

* Cannot be redeclared
* Gives Reference Error before initialization
* Can be reassigned

### var

* Can be redeclared
* Gives undefined before initialization
* Can be reassigned

### const

* Cannot be redeclared
* Cannot be reassigned

---

## Sum of Two Integers

```js
let a = 20;
let b = 30;

console.log(a + b);
```

---

## Type Coercion

JavaScript automatically converts data types depending on operators.

Example:

```js
console.log("2" - 2);
```

Output:

```js
0
```

---

## Taking User Input Using Node.js

Install package:

```bash
npm install prompt-sync
```

Code:

```js
const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");

console.log(name);
```

---

## Swap Two Numbers

### Method 1: Using Third Variable

```js
let temp = b;
b = a;
a = temp;
```

### Method 2: Using Mathematics

```js
a = a + b;
b = a - b;
a = a - b;
```

### Method 3: Using Array Destructuring

```js
[b, a] = [a, b];
```
