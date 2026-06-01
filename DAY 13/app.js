/*
Q : 1:
Harshad Number Checker
Write a program to check whether a given number is a Harshad Number or not. A Harshad Number (or Niven Number) is a number that is divisible by the sum of its digits. 
For example, 18 is a Harshad number because 1 + 8 = 9, and 18 % 9 == 0.
*/

        // class Solution {
        //     checkHarshad(n) {
        //         if(n<0 || n>1000000)
        //             return "Invalid Number";
        //         let temp = n;
        //         let sum = 0;
        //         while(n>0){
        //             let digit = n%10;
        //             sum = sum + digit;
        //             n = Math.floor(n/10);
        //         }
        //         if(temp%sum==0)
        //             return "Harshad Number";
        //         if(temp%sum!==0)
        //             return "Not Harshad Number"
        //     }
        // }
        // let s = new Solution();
        // console.log(s.checkHarshad(21));

/*
Q : 2:
Abundant Number Checker
An Abundant Number is a number for which the sum of its proper divisors (divisors excluding the number itself) is greater than the number. Your task is to write a program to determine if a given number is an Abundant Numbers. Return "Yes" or "No".
Examples 1:
12 -> Yes It is Abundent - Here Sum of Deviser of 12(6241) is > 12 so 12 is Abundent
10 -> No It is Not Abundent  - Here Sum of Deviser of 10(521) is < 10 so 10 is Abundent
*/

        // class Solution2 {
        //     checkAbundant(n) {
        //         if(n<0 || n>1000000)
        //             return "Invalid Number"
        //         let sum =0;
        //         for(let i=1; i<=n/2; i++){
        //             if(n%i==0){
        //                 sum = sum + i;
        //             }
        //         }
        //         if(sum>n)
        //             return "Yes"
        //         else
        //             return "No"
        //     }
        // }
        // let s2 = new Solution2();
        // console.log(s2.checkAbundant(10));

/*
Q : 3:
Finding Armstrong Number
You are given an integer as input. Your task is to check whether the given number
is an Armstrong number or not. An Armstrong number is a number that is equal to 
the sum of its own digits raised to the power of the number of digits.
For example, 153 = 1³ + 5³ + 3³ = 153 → Armstrong 
9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474 → Armstrong
 If the number is Armstrong, print "Armstrong", otherwise print "Not Armstrong".
*/

        class Solution3 {
            arm(n) {
            if(n<1000000 || n>1000000)
                return "Invalid Number"
               let temp = n;
               let temp2 = n;
               let count = 0;
               while(n>0){
                count++;
                n = Math.floor(n/10);
               }
               let length = count;
               console.log(length);
               let sum = 0;
               while(temp2>0){
                let digit = temp2%10;
                sum = sum + Math.pow(digit,length);
                temp2 = Math.floor(temp2/10);
               }

               if(sum==temp){
                console.log("Armstrong")
               }
               else{
                console.log("Not Armstrong");
               }
            }
        }
        
        s3 = new Solution3();
        s3.arm(153); //Note: Not Wroking if First Number is Zero like 0153 not work