//Counter II
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const start=init;
    let current=init;
    return {
        increment:function(){
            return ++current;
        },
        decrement:function(){
            return --current;
        },
        reset:function(){
            current=start;
            return current;
        }
    }
};
//Counter
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count=n;
    return function() { 
         return count++;
    };
};