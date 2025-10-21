// return-length-of-arguments-passed 
// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function(arr, fn) {
//     let ar=[];
//     for(let i=0;i<arr.length;i++){
//             ar.push(fn(arr[i]));
//     }
//     console.log(ar);
    
// };
// map([1,2,3],function fn(n){return n+1});

//apply-transfor-over-each-element-in-array
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

const output=argumentsLength({}, null, "3"); // 3
console.log(output);