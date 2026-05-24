// Switch is faster then if else beacuse it use hashing technique Dircetly Check Correct Condition And Execute it.

//Switch case work in floating point also
// let n = 10.9
// switch(n){
//     case 10.2 : console.log("Hello");
//     case 10.9 : console.log("Hii");
// }

// ==== Switch Case Example 

// let prompt = require("prompt-sync")();
// let day = +prompt("Enter a day Number : ");
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("WednesDay");
//         break;
//     case 4:
//         console.log("Default");
//         break;
// }

// ================ multiple same condition

// case 1 :
// case 3 : {console.log("Hello")}

// Q 22 : Using Swicth (Check Constant or vowel using switch)

// let prompt = require("prompt-sync")();
// let s = prompt("Enter a String :");
// let consononent = 0;
// let vowel = 0;
// for(let i=0; i<s.length; i++){
//     let ch = s.charAt(i)
//     switch(ch){
//         case 'a' :
//         case 'e' :
//         case 'i' :
//         case 'o' :
//         case 'u' : vowel++;
//         break;
//         default : consononent++;
//     }
// }
// console.log("Consonent " + consononent);
// console.log("Vowel : " + vowel);


// ===== Q 22 Write a Program to Calculate the Area of a circle, rectangle , and triangle using a switch statement

// let prompt = require("prompt-sync")();

// console.log("Enter 1 For Area of Rectangle")
// console.log("Enter 2 For Area of Square")
// console.log("Enter 3 For Area of Triangle")

// let n = +prompt("Enter a Number: ");

// switch(n){

//     case 1:
//         let length = +prompt("Enter a Length : ");
//         let breadth = +prompt("Enter a Breadth : ");

//         console.log(length*breadth);
//         break;

//     case 2:
//         let side = +prompt("Enter Side: ");
//         console.log(side*side);
//         break;
    
//     case 3:
//         let height = +prompt("Enter Height : ");
//         let Base = +prompt("Enter Base : ");

//         console.log((height * base)/2);
//         break;

//     default :
//         console.log("Invalid Number ");

// }