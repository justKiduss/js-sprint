//exercise one

function reusableFunction(){
console.log("Hi World");
}
reusableFunction();

//exercise two
function functionWithArgs(a,b){
  console.log(a+b);
}
functionWithArgs(1,2);
//exercise three
function timesFive(n){
return n*5;
}
timesFive(5);
//exercise four
// Declare the myGlobal variable below this line
let myGlobal=10;
let oopsGlobal;
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
//exercise five
function myLocalScope() {
  // Only change code below this line
let myVar=9;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);

//exercise six

let processed=0;
function processArg(num){
  return (num + 3) / 5;
}
processed=processArg(7);

// exercise seven

function nextInLine(arr,item){
arr.push(item);
return arr.shift();
}
let testArr=[1,2,3,4,5];
console.log(nextInLine(testArr,6));

//exercise eight

let isTrue=true;
let isFalse=false;
console.log(isTrue&&isFalse);
