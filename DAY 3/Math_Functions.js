// ================= Math Functions =================

// Math.abs()
// Converts negative value into positive

console.log(Math.abs(-5));

// ===============================================

// Math.ceil()
// Converts floating value into next higher integer

console.log(Math.ceil(1.1));

// ===============================================

// Math.floor()
// Converts floating value into lower integer

console.log(Math.floor(1.9));

// ===============================================

// Math.round()
// Rounds the value
// >= .50 behaves like ceil
// < .50 behaves like floor

console.log(Math.round(10.50));

// ===============================================

// Math.trunc()
// Removes decimal part

console.log(Math.trunc(10.56223));

// ===============================================

// Math.pow()
// Returns power value
// First parameter = number
// Second parameter = power

console.log(Math.pow(10,3));

// ===============================================

// Math.max()
// Returns highest value among all elements

console.log(Math.max(10,0,30));

// ===============================================

// Math.min()
// Returns smallest value among all elements

console.log(Math.min(10,0,30));

// ===============================================

// Math.random()
// Generates random value between 0 to 0.999999

console.log(Math.random());

// ===============================================

// toFixed()
// Limits decimal places

console.log((10.23465656).toFixed(4));

// ===============================================

// Math.sqrt()
// Returns square root

console.log(Math.sqrt(27));

// ===============================================

// Math.cbrt()
// Returns cube root

console.log(Math.cbrt(36));

// ===============================================

// Q6: Calculate Compound Interest

function CalculateCompoundInterest(p,r,t){


let cp = p * Math.pow((1 + r /100),t) - p;

console.log(cp.toFixed(2));


}

CalculateCompoundInterest(10000,5,3);

// ===============================================

// Q7: Generate Random OTP

console.log(Math.ceil(Math.random()*10000));

// ===============================================

// Q8: Area Of Triangle By Heron's Formula

function getTrianglebyHeronsFormula(s,a,b,c){


let ans = Math.sqrt(s * (s-a) * (s-b) * (s-c));

console.log(ans.toFixed(2));


}

getTrianglebyHeronsFormula(9,5,6,7);

// ===============================================

// Q9: Circumference Of Circle

function CIRCUMFRENCEOFCIRCLE(r){


let c = 2 * Math.PI * r;

console.log(c.toFixed(2));


}

CIRCUMFRENCEOFCIRCLE(7);

console.log(Math.min(-3,-7,0,2,3))