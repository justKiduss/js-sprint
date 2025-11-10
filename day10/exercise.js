// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// function memoize(fn) {
//     let cache={};
//     return function(...args) {
//        let key=JSON.stringify(args);

//        if(key in cache){
//         return cache[key];
//        }

//        const sum=fn(...args);
//        cache[key]=sum;
//        return sum; 
//     }
// }

 
//   let callCount = 0;
//   const memoizedFn = memoize(function (a, b) {
//  	 callCount += 1;
//     return a + b;
//   })
//   memoizedFn(2, 3) // 5
//   memoizedFn(2, 3) // 5
//  console.log(callCount) // 1 
 

// 2627 Debounce

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer=null
    return function(...args) {
    if(timer!==null){
        clearTimeout(timer);
    }
timer=setTimeout(()=>fn(...args),t)
    }
};



