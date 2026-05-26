/*
    Q: 25: Check Given Number is Prime Or Not
    Number Devide by ItSelf + Number Devided by 1  + Have Exact Two  Factors = Prime Number
    Like a Number is 7
    Number Devide by 1
    7 / 1 = Answer is 7 But Reminder = 0 Means Divisable = Case Check Success
    Number Devide by ItSelf  :
    7 / 7 = Answer is 1 But Reminder = 0 Means Divisable = Case Check Success
    But Factor Exact Two Joie Two Upar Nai Chale
*/

        //================= Q: 25 Solution 1: =================

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // let count = 0;
        // //Loop Half Var Execute Karyu -> Karan ke Second Last Factor Apnne N Karta Addhu athava      ena thi nanu madse 
        // for(let i=1; i<=n/2; i++){
        //     if(n%i==0){
        //         count++;
        //     }
        // }
        // if (count==1) console.log("Prime");
        // else console.log("Not a Prime");

        //================= Q: 25 Solution 2 =================

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // let count = 0;
        // for(let i=2; i<=n/2; i++){ // 1 ane n ne nikadi didha 
        //     if(n%i==0){
        //         count++;
        //     }
        // }
        // if (count==0) console.log("Prime");
        // else console.log("Not a Prime");

        //================= Q: 25 Solution 3 High Optimal =================

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        
        // if(n<=1)
        //     console.log("Not Prime"); 
        // else if(n == 2)
        //     console.log("Prime");
        // else if(n%2==0)
        //     console.log("Not a Prime");
        // else{
        //     let isPrime = true;
        //     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
        //         if(n%i==0){
        //             isPrime = false;
        //             break;
        //         }
        //     }
        //     if(isPrime){
        //         console.log("Prime");
        //     }else{
        //         console.log("Not a Prime");
        //     }
        // }