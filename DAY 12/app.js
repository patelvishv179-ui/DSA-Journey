/*
    Do While loop
*/

        // let i=1;
        // do{
        //     console.log("Hello World")
        // }while(i>10); //Even Condition is False First Iteration Execute must

/*
   Q: 31 user jab tak 1 de raha he helloword print karo jse hi koy aur value de stop ho jao
   1 bar to hello word print karana hi he
*/
        // let prompt = require("prompt-sync")();
        // let num;
        // do{
        //     console.log("Hello");
        //     num = +prompt("Enter an Number : ");
        // }while(num==1);

/*
    Create a Gauess The Number Game     
*/

        // let prompt = require("prompt-sync")();
        // let num;
        // let computer = Math.floor(Math.random()*101)+1; //0 nahi chahiye
        // let user;
        // let attempt = 0;
        // do{
        //     attempt++;
        //     user = +prompt("Enter an Number between 1 and 100 : ");
        //     if(user>computer)
        //         console.log("Too Large");
        //     else if(user<computer)
        //         console.log("Too Small");
        //     else if(user==computer)
        //         console.log("Congratulations , You Guessed Correct Number in a " + attempt + " Attempts");
        //     else console.log("Invalid Number");

        // }while(user != computer);

/*
    Create a Small Calculator
*/

        // let prompt = require("prompt-sync")();
        // let n,re;
        // do{
        //     console.log("Enter 1 For Addition");
        //     console.log("Enter 2 For Substraction");

        //     n = +prompt("Enter an Number : ");

        //     switch(n){
        //         case 1:{
        //             let a = +prompt("Enter a First Number: ");
        //             let b = +prompt("Enter a Second Number: ");
        //             console.log("Addition  " + (a+b));
        //             break;
        //         }
        //         case 2:{
        //             let a = +prompt("Enter a First Number: ");
        //             let b = +prompt("Enter a Second Number: ");
        //             console.log("Addition  " + (a+b));
        //             break;
        //         }
        //         default :
        //             console.log("Invalid Number");
        //             break; 
        //     }
        //     re = +prompt("Enter 10 For Re Continue Program ");
        // }while(re==10);     

/*
    Restaurant - by default menu batavo peli var
    te select kare indian food to indian food nu menu batavo
    jo e select kare american food to american food nu menu batavo
    american food ma pizza select kare to pizza serve karo pachhi  
*/

        // let prompt = require("prompt-sync")();
        // let n,n2;
        // do{
        //     console.log("===== Menu Items =====");
        //     console.log("Enter 1 For Indian Food");
        //     console.log("Enter 2 For American Food");
        //     n= +prompt("Enter an Number See From Menu : ");
        //     switch(n){
        //         case 1: {
        //             do{
        //                 console.log("Enter 1 For Desi Kari");
        //                 console.log("Enter 2 For Kathiyavadi Rotlo");
        //                 n2= +prompt("Enter an Number See From Indian Food Menu : ");

        //                 switch(n2){
        //                     case 1 : {
        //                         console.log("ye Lijiye apki kari ....");
        //                         break;
        //                     }
        //                     case 2:{
        //                         console.log("ye Lijiye Kathiyavadi Rotla ....");
        //                         break;
        //                     }
        //                     default : {
        //                         console.log("Invalid Number");
        //                         break;
        //                     }
        //                 }
            
        //                 n2 = +prompt("Enter 5 For ReExecute Indian menu : ");

        //             }while(n2==5);
        //             break;
        //         }
        //         case 2: {
        //             do{
        //                 console.log("Enter 1 For Burgur");
        //                 console.log("Enter 2 For Pizza");
        //                 n2= +prompt("Enter an Number See From American Food Menu : ");

        //                 switch(n2){
        //                     case 1 : {
        //                         console.log("ye Lijiye apka burgur ....");
        //                         break;
        //                     }
        //                     case 2:{
        //                         console.log("ye Lijiye apka Pizza ....");
        //                         break;
        //                     }
        //                     default : {
        //                         console.log("Invalid Number");
        //                         break;
        //                     }
        //                 }
            
        //                 n2 = +prompt("Enter 5 For Re Execute American menu : ");

        //             }while(n2==5);
        //             break;
        //         }default : {
        //             console.log("Invalid Number");
        //         }
        //     }
        //     n = +prompt("Enter 10 For Re Execute Main menu : ");
        // }while(n==10);