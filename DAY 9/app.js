/*
    Q : 26 : Take Two Numbers And Print Power Of Number One
    Example: a=2, b=5 then answer is 35
*/

// let prompt = require("prompt-sync")();
// let num1 = +prompt("Enter Number 1 : ");
// let num2 = +prompt("Enter Number 2 : ");
// console.log(Math.pow(num1,num2));

/*
    break -> stop a code execution mainly use in (switch operation and loop)
*/

// for(let i =1; i<=5; i++){
//     if(i==3) break; //Whenever i === 3 loop will stopped imediatly by js engine
//     console.log(i);
// }

/*
    continue = skip the perticluar iteration -  used in a loop
*/

for(let i =1; i<=5; i++){
    if(i==3) continue; //Whenever i === 3 loop will imediatly imediatly redirect to next iteration without executing currunt iteration
    console.log(i);
}
