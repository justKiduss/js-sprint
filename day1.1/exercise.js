//Map
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 
var map = function(arr, fn) {
    let result=[];
    let arr=[1,2,3];
    if (!Array.isArray(arr) || typeof fn !== "function") return result;
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
     console.log(result);
};
map(arr,function fn(n){
    return n+1
})

//Argument Length

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

let count=0;
let arr=[];
arr.push(...args)
for(let i=0;i<arr.length;i++){
count++;
}
console.log(count);
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
 argumentsLength(1,2,3)

