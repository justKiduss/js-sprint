// 2623. Memoize
// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// function memoize(fn) {
//     let cache={};
//     return function(...args) {
//         let key=JSON.stringify(args);
//         if(key in cache){
//             return cache[key];
//         }
//         let sum=fn(...args)
//         cache[key]=sum;
//         return sum;
//     }
// }

 
//   let callCount = 0;
//   const memoizedFn = memoize(function (a, b) {
//  	 callCount += 1;
//     return a + b;
//   })
// console.log("call 1",memoizedFn(2,3)); // 5
//  console.log("call 2",memoizedFn(2, 3)); // 5
//  console.log("call",callCount) // 1 
 

//2622. Cache With Time Limit

var TimeLimitedCache = function() {
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
