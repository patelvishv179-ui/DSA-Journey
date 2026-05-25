/* 
 ==== Q : 18 PRINT NATURAL NUMBERS UP TO N ====
*/

    // let prompt = require("prompt-sync")();
    // let N = +prompt("Enter an Number : ");
    // for(let i=1; i<=N; i++){
    //     console.log(i);
    // }

/*
    Q: 19: Reverse For Loop Print N to 1
*/

    // let prompt = require("prompt-sync")();
    // let N = +prompt("Enter an Number : ");
    // for(let i=N; i>0; i--){
    //     console.log(i);
    // }

/*
    Q: 20: Take a Number as Input and Print It's Table
    5 * 1 = 5
    5 * 2 = 10 ..Up to 10 Times
*/

    // let prompt = require("prompt-sync")();
    // let Number = +prompt("Enter an Number: ");
    // for(let i=1; i<=10; i++){
    //     console.log(`${Number} * ${i} = ${Number * i}`);
    // }

/*
    Q: 21: Sum Up To N Terms From 0
*/

    // let prompt = require("prompt-sync")();
    // let N = +prompt("Enter an Number : ");
    // let sum =0;
    // for(let i=0; i<=N; i++){
    //     sum = sum + i;
    // }
    // console.log(sum);

/*
    Q: 22: Factorial Of a Number
*/

    // let prompt = require("prompt-sync")();
    // let N = +prompt("Enter an Number : ");
    // let mul = 1;
    // for(i=1; i<=N; i++){
    //     mul = mul * i;
    // }
    // console.log(mul);

/*
    Q: 23: Print The Sum of All Even & ODD Numbers in a Range(Range Take by User Start Number and End Number)
*/

    // let prompt = require("prompt-sync")();
    // let Start = +prompt("Enter an Starting Range Number : ");
    // let End = +prompt("Enter an Ending Range Number : ");
    // let evensum = 0;
    // let oddsum = 0;

    // // If User Enter Ending Number First Instead Of Starting Number
    // if(Start > End){
    //     let temp = Start;
    //     Start = End;
    //     End = temp;
    // }

    // for(let i=Start; i<=End; i++){
    //     if(i%2==0){
    //         evensum = evensum + i;
    //     }
    //     if(i%2!==0){
    //         oddsum = oddsum + i;
    //     }
    // }
    // console.log("Range is Beetwen " + Start + " To " + End );
    // console.log("Sum of ODD Numbers is " + oddsum);
    // console.log("Sum of Even Number is " + evensum);

/*
    Q: 24: Print All The Factors Of a Number (Range is 1 to n)
    Factors Means Completly Devisable Numbers
    Example : if user gives number 10 -> then output will be : 1,2,5,10
*/

        /* ===== Solution 1 : Loop Will Execute unitll n times it is not optimal  ===*/

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // for(let i=1; i<=n; i++){
        //     if(n%i==0){
        //         // console.log(i); //For Java Script
        //         process.stdout.write(i + " "); //It is Only For If node js Installed + write only       require String Integer Give an error if we print process.stdout.write(i) <-it's     doesn't work
        //     }
        // }

    /* 
        Why Solution 2 is Optimal ! Understand Below Text:

        Factor of 10 is -> 1, 2, 5, 10
        Factor of 20 is-> 1, 2, 4, 5, 10,20
        Factors of 25 is -> 1 5 25
        Factor of 30 is-> 1, 2, 3, 5, 6, 10, 15, 30

        Note: Last Factor is a Number Means Same, like if number is 10 then last is 10
              And Second Last is Half of It Or Less Then It
              SO What we could do We Execute Loop n/2 Times Means Half of Time 
              Which Make Code Execution Faster + Save Memory 

    */

        /* ====== Solution 2 : Loop Will Execute half of n times it is optimal  ========*/

        // let prompt = require("prompt-sync")();
        // let n = +prompt("Enter an Number : ");
        // for(let i=1; i<=n/2; i++){
        //     if(n%i==0){
        //         process.stdout.write(i + " "); 
        //     }
        // }
        // process.stdout.write(String(n)); 