/*
    While Loop
*/

        //Syntax
        // initialization
        // while(condition){
        //     increment/decrement
        // }

        //Example
        // let i=1;
        // while(i<=4){
        //     console.log(i);
        //     i++;
        // }

/*
    jab number of iterations pata ho tab - while loop 
    jab number of iterations pata na ho tab - for loop 
*/

/*
    Q: 27 Sum of Digits
*/  
        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // let sum = 0;
        // while(n>0){
        //     let digit = Math.floor(n%10);
        //     sum = sum + digit;
        //     n = Math.floor(n/10);
        // }
        // console.log(sum);

/*
    Q: 27 Reverse Of a Number
*/ 

        //==== Solution 1 of Q:27 ======

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // let rev = "";
        // while(n>0){
        //     let digit = n%10;
        //     rev = rev + digit;
        //     n = Math.floor(n/10);
        // }
        // console.log(rev);

        //==== Solution 2 of Q:27 ======

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // let rev = 0;
        // while(n>0){
        //     let digit = n%10;
        //     rev = (rev * 10) + digit;
        //     n = Math.floor(n/10);
        // }
        // console.log(rev);

/*
    Extra Question :
    Identify Given Number is Strong or Not -> My Own Logic Not seen from anywhere
    Solution 1:
*/
        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // let temp=n;
        // let facsum = 0; 
        // while(n>0){
        //     let digit = n%10; 
        //     let fac = function(){
        //         let mul = 1;
        //         for(let i=digit; i>=1; i--){
        //         mul = mul * i;
        //         }
        //         return mul;
        //     }
        //     let factorial = fac();
        //     facsum = facsum + factorial;
        //     n = Math.floor(n / 10);
        // }
        // if(facsum==temp)
        //     console.log("Strong");
        // else
        //     console.log("Not a Strong Number");

/*
    Extra Question :
    Solution 2:
*/

        let prompt = require("prompt-sync")();
        let n = +prompt("Enter a Number : ");
        let temp = n;
        let facsum = 0;
        while(n > 0){
            let digit = n % 10;
            let factorial = 1;
            for(let i = 2; i <= digit; i++){
                factorial *= i;
            }
                facsum += factorial;
                n = Math.floor(n / 10);
            }
            if(facsum === temp)
                console.log("Strong");
            else
                console.log("Not a Strong Number");     