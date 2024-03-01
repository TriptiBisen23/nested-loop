const input = require("readline-sync");

let n = input.questionInt("Enter the number:");

let c ="";

for(let i=0; i<=0; i++)
{

   c+="* ";
} console.log(c);

for(let i=0;i<=n; i++)
{    
   console.log('* *');
}
for(let i =0; i>n; i++)
{
    c+="* ";
   
}  console.log(c);