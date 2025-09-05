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
