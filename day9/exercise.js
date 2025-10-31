/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache={};
    return function(...args) {
        let key=JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        let sum=fn(...args)
        cache[key]=sum;
        return sum;
    }
}

 
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
console.log("call 1",memoizedFn(2,3)); // 5
 console.log("call 2",memoizedFn(2, 3)); // 5
 console.log("call",callCount) // 1 
 

 