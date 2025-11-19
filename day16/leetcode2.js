// 231. Power of Two

// this is incorrect
// var isPowerOfTwo = function(n) {
//     let x;
//     x=n*Math.log2(2)
//     console.log(x);
//     // if(2**x==n){
//     //  return true
//     // }
//     // return false
// };

// const power=isPowerOfTwo(4);
// console.log(power);

// correct 
// var isPowerOfTwo = function(n) {
// if (n <= 0) return false;
// let x = Math.log2(n);
// return Number.isInteger(x);
// };
// const power=isPowerOfTwo(3);
// console.log(power);

// this is the fastest and the correct

// var isPowerOfTwo = function(n) {
//     return n > 0 && (n & (n - 1)) === 0;  this uses bitwise,
// };



//