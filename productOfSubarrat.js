"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const nestedArray = JSON.parse(readLine());

  /* Write your code here */
  function product(num){
      return num.reduce((a,b)=>a*b);
  }
  
  function some(x){
      return x.some(a=>a%2===0);
  }
  let result=nestedArray.map((i)=>some(i)?product(i):0);
 console.log(result)
}
