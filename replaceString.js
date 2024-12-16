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
  const inputString = readLine();
  const separator = readLine();
  const replaceString = readLine();
  
  /* Write your code here */
  let lis=null;
  let SplitedStr=inputString.split(separator);
  let newStr=SplitedStr.join(" ");
  
  let x=SplitedStr.map((i,index,list)=>{
      if(i.length>7){
          list.splice(index,1,replaceString)
          lis=list
      }
  })
if(lis===null){
    console.log(SplitedStr.join(" "));
}else{
    console.log(lis.join(" "));
}
}
