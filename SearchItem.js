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
  const categoryOfItem = readLine();
  const item = readLine();

  const mart = [
    {
      category:"pulses",
      items: ["green gram", "green peas", "Turkish gram"]
    },
    {
      category:"soaps",
      items:["santoor", "dove", "lux", "pears"]
    }, 
    {
      category:"oil",
      items: ["sunflower oil", "grapeseed oil", "soybean oil"]
    }, 
    {
      category:"cereals",
      items: ["wheat", "rice", "maize", "oat"]
    }, 
    {
      category:"spices",
      items: ["cumin", "coriander", "black pepper", "clove"]
    }
  ];
  
  /* Write your code here */
  let prom=()=>{
      return new Promise((resolve,reject)=>{
          let res=mart.find((i)=>i.category===categoryOfItem);
          if(res !== undefined){
              let item_in_obj=res.items;
              let x=item_in_obj.includes(item);
              if(x){
                  resolve("Item Found")
              }
              else{
                  resolve("Item Not Found")
              }
          }
          else{
              reject("Category Not Found")
          }
      });
  };
  
  let ayncBlock=async()=>{
      try{
          let promObj=await prom();
          console.log(promObj);
      }catch(err){
          console.log(err);
      }
  }
  ayncBlock();
  
  
  
  
  
}
