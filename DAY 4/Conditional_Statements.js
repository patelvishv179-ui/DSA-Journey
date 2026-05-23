// Questions

// ================== Q:10: Accept Two Numbers and Print the Greatest Beetween Them

// let prompt = require("prompt-sync")();
// let a = +prompt("Enter First Number: ");
// let b = +prompt("Enter Second Number: ");
// if(a < b){
//     console.log("B Is Greater");
// }else{
//     console.log("A Is Greater");
// }

//Q:11 Accept an Integer and Check Whether it is an even number or odd

// let prompt = require("prompt-sync")();
// let num = +prompt("Enter an Number : ");
// if(num%2==0)
//     console.log("Even")
// else
//     console.log("Odd");

// ===================== Q:12 Accept Name and age from the User, Check if the user is valid voter or not

// let prompt = require("prompt-sync")();
// let name = prompt("Enter Your Name : ");
// let age = +prompt("Enter Your Age : ");

// if(age >= 18)
//     console.log("Eligible");
// else
//     console.log("Not Eligible");

// =================================== Q 14 Accept the three numbers and print the greatest among them

// let prompt = require("prompt-sync")();
// let a = +prompt("Enter First Number : ");
// let b = +prompt("Enter Second Number : ");
// let c = +prompt("Enter Third Number : ");
// if(a<b && b>c)
//     console.log("B IS GREATER");
// else if(a>b && a>c)
//     console.log("A IS GREATER");
// else
//     console.log("C IS GREATER");

// ================================ Q 15: ACCEPT A YEAR AND CHECK IF IT IS A LEAP YEAR OR NOT
// 366 Days = Leap Year
// Condition Check on Google

// let prompt = require("prompt-sync")();
// let year = prompt("Enter Your Year : ");

// if(year % 4 == 0 && year %100 !=0)
//     console.log("Leap Year");
// else if(year %400 == 0)
//     console.log("Leap Year");
// else
//     console.log("Normal Year");

// ========================================== Q 16 : Shop discount

// AMOUNT 0-5000 DISCOUNT 0%
// AMOUNT 5001-7000 DISCOUNT 5%
// AMOUNT 7001-9000 DISCOUNT 10%
// AMOUNT MORE THEN 9000 DISCOUNT 20%

// let prompt = require("prompt-sync")();
// let amount = +prompt("Enter a Amount: ");
// let payable = 0;
// if(amount <= 5000){
//     console.log("Payable Amount is : " + amount);
//     console.log("No Discount Available ");
// }
// else if(amount >= 5001 && amount <= 7000){
//     let disc = (amount * 5) / 100;
//     payable = amount - disc;
//     console.log("Original Price : " + amount);
//     console.log(`Discount (5%) : ${disc} Ruppees`);
//     console.log("Payable Amount is : " + payable);
// }
// else if(amount >= 7001 && amount <=9000){
//     let disc = (amount * 10) / 100;
//     payable = amount - disc;
//     console.log("Original Price : " + amount);
//     console.log(`Discount (10%) : ${disc} Ruppees`);
//     console.log("Payable Amount is : " + payable);
// }
// else{
//     let disc = (amount * 20) / 100;
//     payable = amount - disc;
//     console.log("Original Price : " + amount);
//     console.log(`Discount (20%) : ${disc} Ruppees`);
//     console.log("Payable Amount is : " + payable);
// }

// ===========  OR ANOTHER OPTIMAL SOLUTION IS ===========

// let prompt = require("prompt-sync")();
// let price = +prompt("Enter Your Product Price ");
// let dis = 0;
// if(price < 5000)
//     dis = 0;
// else if(price >= 5001 && price <=7000)
//     dis = 5
// else if(price >= 7001 && price<=9000)
//     dis = 10
// else
//     dis = 20
// console.log("Payable Amount is : " + (price - ((price * dis) / 100)));

// =========================== CALCULATE BILL ==================

// 0 - 100 -> 4.2 Per Unit but jo unit 120 ave to 100 sudhina unit na price 4.2 levana ane uparna na j 6 levena

// 101 - 200 -> 6 Per Unit

// 201 - 400 -> 8 per Unit

// More then 400 -> 13 per Unit

// Top Down Approach
// let prompt = require("prompt-sync")();
// let unit = +prompt("Enter Units: ");
// let amount = 0;
// if(unit > 0 && unit <=100) console.log(unit*4.2);
// else if(unit >100 && unit <=200){
//     console.log((100*4.2) + (unit-100)*6);
// }
// else if(unit > 200 && unit <=400){
//     console.log((100*4.2) + (100*6) + (unit-200) * 8);
// }
// else{
//     console.log((100*4.2) + (100*6) + (200 * 8) + (unit-400)*13);
// }

// //Bottom up Approach
// let prompt = require("prompt-sync")();
// let unit = +prompt("Enter Units: ");
// let amount = 0;
// if(unit > 400){
//     amount = (unit-400) * 13
//     unit = 400;
// }

// if(unit > 200 && unit <=400){
//     amount = amount +  (unit-200) * 8
//     unit = 200
// }

// if(unit >100 && unit<=200){
//     amount = amount + (unit-100) * 6
//     unit = 100;
// }

// amount = amount + (unit * 4.2);

// console.log(amount);

// === Q 17 : Counting a Number of Days In a Given Month of Year

// let prompt = require("prompt-sync")();
// let month = +prompt("Enter Month: ");
// let year = +prompt("Enter Year: ");
// let days = 0;

// if (month == 2) {
//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     days = 29;
//   } else {
//     days = 28;
//   }
// } else if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   days = 31;
// } else {
//   days = 30;
// }

// console.log(days);
