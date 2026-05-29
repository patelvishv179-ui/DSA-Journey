/*

    Q: 28  
    User Ne jo number diya he wo valid isbn numbe he yaa nahi

    ISBN Number - Internation Standard Book Number

    Validation rule :
    For Length : 10 
    (1*d1 + 2*d2 + 3*d3 + ... + 10 * d10) Mod 11 = 0 then ISBN IS VALID
    Validation rule :
    For Length : 13 
    (1*d1 + 3*d2 + 1*d3 + 3*d4+ ... + 3 * d12 + 1 * d13) Mod 10 = 0 then ISBN IS VALID
*/

/*=-=================================
    Q:28
    Soution For 10 Digit - By My Side Without Check see any Solution
    For Answer Check Please Put This Number : 0123456789(It is Valid ISBN)
                                              9388369695(It is NOT Valid ISBN)
    Formula Example:
        ISBN-10 Validation Rule:
        ( D1×10 + D2×9 + D3×8 + D4×7 + D5×6 + D6×5 + D7×4 + D8×3 + D9×2 + D10×1 ) % 11 = 0 ⇒ VALID ISBN
    =========================================
*/
    
    // let prompt = require("prompt-sync")();
    // let n = prompt("Enter an Number: ");
    // if(n.length != 10){
    //     console.log("Please Exact Enter 10 Digit ISBN");
    //     return;
    // }
    // let sum = 0, place =1;
    // while(n>0){
    //     let digit = n%10;
    //     sum = sum + (place*digit);
    //     place++;
    //     n = Math.floor(n/10);
    // }
    // console.log(sum)
    // if(sum%11==0)
    //     console.log("VALID");
    // else
    //     console.log("INVALID");

/*=-=================================
    Q:28
    Soution For 13 Digit - By My Side Without Check see any Solution
    For Answer Check Please Put This Number : 9780306406157(It is Valid ISBN)
                                              9780131101631(It is NOT Valid ISBN)
    Formula Example:
        ISBN-13 Validation Rule:
        ((D1×1) + (D2×3) + (D3×1) + (D4×3) + (D5×1) + (D6×3) +
        (D7×1) + (D8×3) + (D9×1) + (D10×3) + (D11×1) + (D12×3) + (D13×1)) % 10 == 0 Then Valid
    =========================================
*/
    
    let prompt = require("prompt-sync")();
    console.log("For 13 Digti Check Valid ISBN  OR NOTe");
    let n = prompt("Enter an Number: ");
    if(n.length != 13){
        console.log("Please Exact Enter 13 Digit ISBN");
        return;
    }
    let sum = 0,place=13;
    while(n>0){
        let digit = n%10; 
        if(place%2==0){
            sum = sum + (3*digit);
        }
        if(place%2!==0){
            sum = sum + (1*digit);
        }
        place--;
        n = Math.floor(n/10);
    }
    console.log(sum)
    if(sum%10==0)
        console.log("VALID");
    else
        console.log("INVALID");


/*
    =================== AutoMorphic ==============
*/

    //    let prompt = require("prompt-sync")();
    //    let n = +prompt("Enter an Number : ");
    //    let temp=n;
    //    let squar = (n * n);
    //    let count = 0;
    //    console.log(squar);
    //    while(n>0){
    //         count++;
    //         n = Math.floor(n/10);
    //    }
    //    if(squar%Math.pow(10,count)==temp){
    //     console.log("AutoMorphic")
    //    }else{
    //     console.log("Not Auto Morphic");
    //    }

/* 
    =====================    Check Number is Strong Or Not
 */

    // function isStrong(n){
    //     if(n<1 || n>100000)
    //         return "Invalid Number"
    //     let temp = n;
    //     let sum = 0;
    //     function getFac(digit){
    //         let mul = 1;
    //         for(let i=5; i>=1; i--){
    //             mul = mul * i;
    //         }
    //         return mul;
    //     }
    //     while(n>0){
    //         let digit = n%10;
    //         let fac = getFac(digit);
    //         sum = sum + fac;
    //         n = Math.floor(n/10)   
    //     }
    //     console.log(sum)
    //     if(sum == temp)
    //         return "Yes"
    //     else 
    //         return "No"
    // }
    // console.log(isStrong(145));