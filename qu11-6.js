const input = require("readline-sync");

let n = input.questionInt("Enter the number:");
let i = 1;
while(i<=n)
{
   let j = 1
   let a= ""
   while(j<=i)
   {
         a+=(j)+ " "
       j++
   }
 j=i-1
 while(j>=1)
 {
      a+=(j)+ " "
     j--
 }
    
 console.log(a);
 i++;
} 
