// const input = require("readline-sync");

// let n = input.questionInt("Enter the number:");
// let i = 1;
// while(i<=n)
// {
// console.log("*".repeat(i))
// i++
// }


const input = require("readline-sync");

let n = input.questionInt("Enter the number:");
let i = 1;
while(i<=n)
{
    let j=1
    let a=""
    while(j<=i)
    {
        a += "*" + " "
        j++
    }
    console.log(a);
    a ="";
    i++
    
}


