const input = require("readline-sync");

let n = input.questionInt("Enter the number:");
let i = 1;
let k = 1;
while(i<=n)
{
    let j = 1
    let a=""
    while(j<=i)
    {
    a+=k + " "
    j++
    k++
    }
    console.log(a);
    i++;
} 



