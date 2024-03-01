const input = require("readline-sync");

let n = input.questionInt("Enter the number:");
 
let i =1;
let j = 1;

while(i<n)
{
    console.log("*".repeat(j)+" " + "*".repeat(j));
    i++;
    j++;
}

console.log("*".repeat(j)+"*".repeat(j));

let k = j-1;
while(k>0)
{
    console.log("*".repeat(k)+" " + "*".repeat(k));
    k-=1;
}







  

  










  

  



