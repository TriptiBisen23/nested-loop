
const input = require("readline-sync");

let n = input.questionInt("Enter the number:");
 
    let k;
    let str;
  let i = 1; 
  let a;
 while(i<=n)
{
    str="";
    let j=1

    a=2*i-1;
 while(j<=a)
{
    
    str+= "*" 
j++;
}

console.log(str);
 
 i++    
} 
n=n-1
i= 1;     
while(i<=n)
{
  str="";
  a=a-2;

  j=1; 
  while(j<=a)
  {
    str+="*";
  j++;
  }
i++;
console.log(str);
} 







  

  

