// Operators And Their Quetions

// Arithmetic - + * / %
// Relational Operators > < >= <= NotEqualTO
// Logical Operators &&, ||
// Uneary Operators ++, --

// Note : Any Other Language ma Integer/Interger karo answer integer j ave DSA ma Pan aa J Rule Apply Karvo

// ====================== DEVISION ===========================

// console.log(Math.floor(10/3)); //Devision 3
// console.log(Math.floor(8/10)); //Devision Jo divison ma agad ni sankhya pachhad karta nani hase to 0 j avse

// ====================== MODE OPERATOR ==============================================

// console.log(Math.floor(10%3)); //Mode 1
// console.log(Math.floor(3%10)); //Mode Jo agad ni sankhya pachhad karta nani hase to answer agad ni sankhya j avse

// ========================= DIGIT HATAVVA ============================================

//  JYARE PAN CHHELA THI KOI PAN DIGIT HATVVI HOY TO DEVIEDE KARO JEM KE 
//  JO EK DGIGIT HATAVO CHHE TO DEVIDE BY 10 KARO
// JO BE HATAVVA HOY TO 100 DEVIDE KARO
//EXAMPLE: 

// let numbers = 12345;
// let ekhatavelonumber  = Math.floor(numbers/10);
// console.log(ekhatavelonumber); output 1234


// ============================= CHELLA DIGIT MEDVVA ====================================

// JYARE PAN CHHELO DIGIT MEDVVO HOY TO MODE 10 KARO 
// JYARE PAN CHHELA BE DIGIT MEDVVA HOY TO MODE 100 KARO

// let numbers = 12345;
// let ekhatavelonumber  = Math.floor(numbers%100); 
// console.log(ekhatavelonumber); //Output 45

//  ======================= Comparision / Relational  ===================================


// console.log(10 > 10); //False
// console.log(10 < 9); // False
// console.log(9 == 9); //True
// console.log(9 == '9'); //True
// console.log(9 === '9'); //false


// console.log(9!=9); //false
// console.log('9' != 9); //false
// console.log('9' !== 9); //true

//  ============= Logical Operator =================

// if(9 != 9 || '9' === 9){
//     console.log("Hello");
// } -> ek pan condition sachi hase block execute thai jase 

// if(9 === 9 && 10 === 10){
//     console.log("Hello");
// } -> BAnne Condtion Sachi Hase to j Chalse

// =============== Unary Operator ============

// Pre Increment ++a

// let a = 10;

// while (a<12){
//     console.log(++a); //Output 11,12
// }

//  Post Increment

// let a = 10;

// while(a<12){
//     console.log(a++);
// } //Output: 10,11

//  Pree Decrement

// let a = 10;

// while (a<11){
//     console.log(--a);
//     if(a == 4){
//         break
//     } //Output 9 8 7 6 5 4
// }

// Post Decrement

// let a = 10;

// while (a<11){
//     console.log(a--);
//     if(a == 4){
//         break
//     } //Output 10 9 8 7 6 5 
// }

// ================= Some Questions About Unary =================

// Post increment no matlab:
// old value use karo
// pachhi immediately increment karo

// Pre increment:
// pela increment
// pachhi value use karo.

// let a = 12;
// let b = 15;
// let c = 8;

// let d = (a++) + (--b) - (c++) + (++a);

        // 12 + 14 - 8 + 13
        // 26 - 8
        // 18 + 14
        // 32

// console.log(d);

// Constant Value  par unary apply na kari sakaya like ++10 is not Valid

// ========================= MCQ S ===================

// MCQ NUMBER 1 

// WHAT WILL BE THE OUTPUT OF BELOW CODE?
// OPTIONS (A) Greater, (B) Smaller, (C) Compillation Error, (D) No Output

// let a = 7;
// if(a>5){
//     // system.out.println("Greater");
// }else{
//     // system.out.println("Smaller");
// }

// Correct Answerr is : Answers is in Answer.txt File (Attached in Repo)

// MCQ NUMBER 2

// FIND VALUE OF X
// OPTIONS (A) UNDEFINED , (B) 16.666666, (C) 16, (D) 16.7

// let x = 50;
// x /= 5 -2; 
// console.log(x);

// Correct Answerr is : Answers is in Answer.txt File (Attached in Repo)

// ---------------

// MCQ NUMBER 3

//FIND THE VALUE OF Y
// OPTIONS: (A) 0 (B) 2 (C) 3 (D) 1

// let y = 7;
// y += 2 
// y *= 3 
// y -=4 
// y %=5 
// console.log(y); // Answers is in Answer.txt File (Attached in Repo)

// ----------------

// MCQ NUMBER 4 

//PREDICT THE OUTPUT
// OPTIONS (A)10, (B)12 (C) 8 (D)14

// What is The Value of x after ececuting x+= 2*3; if x was initialy 4 ?

// Answer is in Answer.txt (Attached in Repo)

// ----------

// MCQ Number 5

//Predict The Output
//Options : (A) 11 , (B) 11.25, (C) 12, (D) 10

// IF Y = 45 WHAT IS THE VALUE OF Y/=4

// Answer is in Answer.txt (Attached in Repo)