// const input = require("readline-sync");

// let n = input.questionInt("Enter the number:");
// let i = n;
// while(i>=0)
// {
//      let j = 1
//      let a=""
//     while(j<=i)
//     {
//         a +="*" + " "
//         j++
       
      
//     }
//     console.log(a);
  
//     i--;
// }



const input = require("readline-sync");

let n = input.questionInt("Enter the number:");
let i = n;
while(i>=0)
{
    console.log("*".repeat(i))
    i--
}